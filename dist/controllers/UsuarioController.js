"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const UsuarioService_1 = require("../services/UsuarioService");
exports.UsuarioController = {
    async listar(req, res) {
        try {
            const usuarios = await UsuarioService_1.UsuarioService.listar();
            res.json(usuarios);
        }
        catch (error) {
            res.status(500).json({ erro: "Erro ao listar recursos" });
        }
    },
    async buscar(req, res) {
        const id = String(req.params.id);
        const usuario = await UsuarioService_1.UsuarioService.buscarPorid(id);
        if (!usuario)
            res.status(404).json({ erro: "Produto não encontrado" });
        res.status(200).json(usuario);
    },
    adicionar: async (req, res) => {
        try {
            const usuario = await UsuarioService_1.UsuarioService.adicionar(req.body);
            res.status(201).json(usuario);
        }
        catch (error) {
            res.status(500).json({ erro: "Erro ao criar usuário" });
        }
    },
    async atualizar(req, res) {
        const id = String(req.params.id);
        const atualizado = await UsuarioService_1.UsuarioService.atualizar(id, req.body);
        if (!atualizado)
            res.status(404).json({ erro: "Usuario não encontrado" });
        res.status(200).json(atualizado);
    },
    async deletar(req, res) {
        const id = String(req.params.id);
        const removido = await UsuarioService_1.UsuarioService.deletar(id);
        if (!removido)
            res.status(404).json({ erro: "Usuario não encontrado" });
        res.status(200).json({ status: "Usuario removido com sucesso", usuario: removido });
    },
};
