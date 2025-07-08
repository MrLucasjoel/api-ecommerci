"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const ProdutoService_1 = require("../services/ProdutoService");
exports.ProdutoController = {
    async listar(req, res) {
        res.status(200).json({ status: "sucesso" });
    },
    criar: async (req, res) => {
        try {
            const produto = await ProdutoService_1.ProdutoService.criar(req.body);
        }
        catch (error) {
            res.status(500).json({ erro: "Erro ao criar recurso" });
        }
    },
    async buscar(req, res) {
        res.status(200).json({ status: "sucesso" });
    },
    async atualizar(req, res) {
        res.status(200).json({ status: "sucesso" });
    },
    async deletar(req, res) {
        res.status(200).json({ status: "sucesso" });
    },
};
