"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const ProdutoService_1 = require("../services/ProdutoService");
exports.ProdutoController = {
    async listarUsuarios(req, res) {
        try {
            // pega os dados, converte p json e retorna mensagem de erro caso ocorra
            const Produtos = await ProdutoService_1.ProdutoService.listar();
            res.json(Produtos);
        }
        catch (error) {
            res.status(500).json({ erro: "Erro ao listar usuario" });
        }
    },
    adicionarUsuarios: async (req, res) => {
        try {
            const produto = await ProdutoService_1.ProdutoService.criar(req.body);
            res.status(201).json(produto);
        }
        catch (error) {
            res.status(500).json({ erro: "Erro ao adicionar usuario" });
        }
    },
    async buscarUsuarios(req, res) {
        const id = Number(req.params.id);
        const produto = await ProdutoService_1.ProdutoService.buscarPorid(id);
        if (!produto)
            res.status(404).json({ erro: "Usuario não encontrado" });
        res.status(200).json(produto);
    },
    async editarUsuarios(req, res) {
        const id = Number(req.params.id);
        const atualizado = await ProdutoService_1.ProdutoService.atualizar(id, req.body);
        if (!atualizado)
            res.status(404).json({ erro: "Usuario não encontrado" });
        res.status(200).json(atualizado);
    },
    async deletarUsuarios(req, res) {
        const id = Number(req.params.id);
        const removido = await ProdutoService_1.ProdutoService.deletar(id);
        if (!removido)
            res.status(404).json({ erro: "Usuario não encontrado" });
        res.status(200).json({ status: "Usuario removido com sucesso", produto: removido });
    },
};
