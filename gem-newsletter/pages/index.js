import { useEffect, useState } from "react";
import { fetchNews } from '../utils/fetchNews';
import { Container, Typography, Card, CardContent, List, ListItem } from '@mui/material';


export default function Home() {
    const [articles, setArticles] = useState ([]);

    useEffect(() => {
        async function getNews() {
            const news = await fetchNews();
            setArticles(news);
        }
        getNews();
    }, []);


    return (
        <Container maxWidth="md">
            <Typography variant="h3" gutterBottom>
                Current News
            </Typography>
            <List>
                {articles.map((article, index) => (
                    <ListItem key={index}>
                        <Card variant="outlined" style={{ width: '100%' }}>
                            <CardContent>
                                <Typography variant="h5">{article.title}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {article.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}