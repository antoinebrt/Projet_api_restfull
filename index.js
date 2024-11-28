require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Bienvenue sur le serveur Express!');
});

app.listen(port, () => {
    console.log(`Le serveur tourne `);
});
