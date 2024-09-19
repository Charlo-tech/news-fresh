import { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";


const ChatBot = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/chatbot', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: input }),
        });
        const data= await res.json();
        setResponse(data.answer);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <TextField
                    label="Ask way!"
                    variant="outlined"
                    fullWidth value={input}
                    onChange={(e) =>setInput(e.target.value)}
                    style={{ marginBottom: '1rem' }} />

                <Button variant="contained" color="primary" type="submit">
                    Let's Go!
                </Button>
            </Form>
            {response && (
                <Typography variant="body1" style={{ marginTop: '1rem' }}>
                    Response: {response}
                </Typography>
            )}
        </Container>
    );
};

export default Chatbot;