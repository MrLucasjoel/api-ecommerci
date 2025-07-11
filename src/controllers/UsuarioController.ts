import { Request, Response } from "express";
import { UsuarioService } from "../services/UsuarioService";


export const UsuarioController = {
    async listar(req: Request, res: Response): Promise<void> {
        try {
            const Usuarios = await UsuarioService.listar();
            res.json(Usuarios);
        } catch (error) {
            res.status(500).json({ erro: error });
        }
    },

    async buscar(req: Request, res: Response): Promise<void>{
        const id = Number(req.params.id)
        const usuario = await UsuarioService.buscarPorid(id)
        if(!usuario) res.status(404).json({erro: "Usuário não encontrado"})
            res.status(200).json(usuario)
    },

    async adicionar (req: Request, res: Response): Promise<void> {
        try {
            const usuario = await UsuarioService.adicionar(req.body);
            res.status(201).json(usuario)
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    },

    async atualizar(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id)
        const atualizado = await UsuarioService.atualizar(id, req.body)
        if (!atualizado) res.status(404).json({ erro: "Usuario não encontrado" })

        res.status(200).json(atualizado)
    },

    async deletar(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id)
        const removido = await UsuarioService.deletar(id)
        if (!removido) res.status(404).json({ erro: "Usuario não encontrado" })

        res.status(200).json({ status: "Usuario removido com sucesso", usuario: removido })
    },
    
};


