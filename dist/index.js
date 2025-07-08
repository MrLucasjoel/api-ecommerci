"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const produto_routes_1 = __importDefault(require("./routes/produto.routes"));
const usuario_routes_1 = __importDefault(require("./routes/usuario.routes")); // nova rota
const data_source_1 = require("./database/data-source");
require('dotenv').config();
data_source_1.AppDataSource.initialize()
    .then(() => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use('/produtos', produto_routes_1.default);
    app.use('/usuarios', usuario_routes_1.default); // adiciona a rota de usuários
    app.listen(process.env.API_PORT, () => {
        console.log("Servidor rodando na porta ", process.env.API_PORT);
    });
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
})
    .catch(error => console.log("Erro ao conectar ao banco:", error));
