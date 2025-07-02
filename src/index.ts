import express from "express";
import 'reflect-metadata';
require('dotenv').config()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Servidor rodando')
})

app.listen(process.env.API_PORT, () => {
    console.log("servidor rodando na porta ",process.env.API_PORT);
})