export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { query } = req.body;

        try {
            const geminiResponse = await fetch('https://api.gemini.com/v1/chat', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json',
                    'Authorization': 'Bearer ${process.env.GEMINI_API_KEY'}
                },
                body: JSON.stringify({
                    prompt: query,
                    model: 'chatbot-model-id'
                })
            });

            const data = await geminiResponse.json();
            res.status(200).json({ answer: data.response });
        } catch (error) {
            console.error('Problem querying gemini', error),
            res.status(500).json({ error: 'Request process failed' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}