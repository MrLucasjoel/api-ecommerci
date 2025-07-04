import express from "express";
import 'reflect-metadata';
import routeProduto from './routes/produto.routes'
require('dotenv').config()

const app = express()
app.use(express.json())

app.use('/produtos',routeProduto)

app.listen(process.env.API_PORT, () => {
    console.log("servidor rodando na porta ",process.env.API_PORT);
})