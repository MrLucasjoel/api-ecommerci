import express from "express"; 
import 'reflect-metadata';
import routeProduto from './routes/produto.routes';
import routeUsuario from './routes/usuario.routes'; // nova rota
import { AppDataSource } from "./database/data-source";
require('dotenv').config();

AppDataSource.initialize()
    .then(() => {
        const app = express();
        app.use(express.json());

        app.use('/produtos', routeProduto);
        app.use('/usuarios', routeUsuario);  // adiciona a rota de usuários
 
        app.listen(process.env.API_PORT, () => {
            console.log("Servidor rodando na porta ", process.env.API_PORT);
        });

        console.log("Conexão com o banco de dados estabelecida com sucesso!");
    })
    .catch(error => console.log("Erro ao conectar ao banco:", error));
