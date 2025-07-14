"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletarUsuario = exports.editarUsuario = exports.adicionarUsuario = exports.listarUsuarios = void 0;
const usuario_1 = require("../database/usuario");
let nextId = 1;
// GET /usuarios
const listarUsuarios = (req, res) => {
    res.json(usuario_1.usuarios);
};
exports.listarUsuarios = listarUsuarios;
// POST /usuarios
const adicionarUsuario = (req, res) => {
    const { nome, email, password } = req.body;
    const novoUsuario = {
        id: nextId++,
        nome,
        email,
        password,
    };
    usuario_1.usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
};
exports.adicionarUsuario = adicionarUsuario;
// PUT /usuarios/:id
const editarUsuario = (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, email, password } = req.body;
    const usuario = usuario_1.usuarios.find((u) => u.id === id);
    if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
    usuario.nome = nome ?? usuario.nome;
    usuario.email = email ?? usuario.email;
    usuario.password = password ?? usuario.password;
    res.json(usuario);
};
exports.editarUsuario = editarUsuario;
// DELETE /usuarios/:id
const deletarUsuario = (req, res) => {
    const id = parseInt(req.params.id);
    const index = usuario_1.usuarios.findIndex((u) => u.id === id);
    if (index === -1) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
    const deletado = usuario_1.usuarios.splice(index, 1)[0];
    res.json({ mensagem: "Usuário deletado", usuario: deletado });
};
exports.deletarUsuario = deletarUsuario;
