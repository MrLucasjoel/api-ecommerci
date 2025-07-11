"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const ProdutoService_1 = require("../services/ProdutoService");
exports.ProdutoController = {
    async listar(req, res) {
        try {
            // pega os dados, converte p json e retorna mensagem de erro caso ocorra
            const Produtos = await ProdutoService_1.ProdutoService.listar();
            res.json(Produtos);
        }
        catch (error) {
            res.status(500).json({ erro: "Erro ao listar recursos" });
        }
    },
    criar: async (req, res) => {
        console.log(req.body);
        try {
            const produto = await ProdutoService_1.ProdutoService.criar(req.body);
            res.status(201).json(produto);
        }
        catch (error) {
            res.status(500).json({ erro: error });
        }
    },
    async buscar(req, res) {
        const id = Number(req.params.id);
        const produto = await ProdutoService_1.ProdutoService.buscarPorid(id);
        if (!produto)
            res.status(404).json({ erro: "Produto não encontrado" });
        res.status(200).json(produto);
    },
    async atualizar(req, res) {
        const id = Number(req.params.id);
        const atualizado = await ProdutoService_1.ProdutoService.atualizar(id, req.body);
        if (!atualizado)
            res.status(404).json({ erro: "Produto não encontrado" });
        res.status(200).json(atualizado);
    },
    async deletar(req, res) {
        const id = Number(req.params.id);
        const removido = await ProdutoService_1.ProdutoService.deletar(id);
        if (!removido)
            res.status(404).json({ erro: "Produto não encontrado" });
        res.status(200).json({ status: "Produto removido com sucesso", produto: removido });
    },
};
