import { Request, Response } from "express";
import { usuarios } from "../database/usuario";
import { Usuario } from "../models/usuario.model";

let nextId = 1;

// GET /usuarios
export const listarUsuarios = (req: Request, res: Response) => {
  res.json(usuarios);
};

// POST /usuarios
export const adicionarUsuario = (req: Request, res: Response) => {
  const { nome, email, password } = req.body;

  const novoUsuario: Usuario = {
    id: nextId++,
    nome,
    email,
    password,
  };

  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
};

// PUT /usuarios/:id
export const editarUsuario = (req: Request<{ id: string }>, res: Response) => {
  const id = parseInt(req.params.id);
  const { nome, email, password } = req.body;

  const usuario = usuarios.find((u) => u.id === id);
  if (!usuario) {
    return res.status(404).json({ mensagem: "Usuário não encontrado" });
  }

  usuario.nome = nome ?? usuario.nome;
  usuario.email = email ?? usuario.email;
  usuario.password = password ?? usuario.password;

  res.json(usuario);
};

// DELETE /usuarios/:id
export const deletarUsuario = (req: Request<{ id: string }>, res: Response) => {
  const id = parseInt(req.params.id);
  const index = usuarios.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: "Usuário não encontrado" });
  }

  const deletado = usuarios.splice(index, 1)[0];
  res.json({ mensagem: "Usuário deletado", usuario: deletado });
};
