import express from "express";
import 'reflect-metadata';
import routeProduto from './routes/produto.routes'
import routeUser from './routes/usuario.routes'
import { AppDataSource } from "./database/data-source";
require('dotenv').config()



AppDataSource.initialize()
    .then(() => {
        const app = express()
        app.use(express.json())
        app.use('/produtos', routeProduto)
        app.use('/usuarios', routeUser)
        app.listen(process.env.API_PORT, () => {
            console.log("servidor rodando na porta ", process.env.API_PORT);
        })
        console.log("Conexão com o banco de dados estabelecida com sucesso!");
    });
