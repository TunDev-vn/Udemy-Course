import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<rem>Contact me</rem>");
});

app.get('/about', (req, res) => {
    res.send("<h2>About me</h2>");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})