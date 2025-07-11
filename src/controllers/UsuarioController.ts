import { Request, Response } from "express";
import { UsuarioService } from "../services/UsuarioService";

const notFound = "Recurso não encontrado"
const serveError = "Erro ao realizar a operação"

export const UsuarioController = {

    async getAll(req: Request, res: Response) : Promise<void>{
        try{
            const user = await UsuarioService.getAll()
            res.status(200).json(user)
        }catch{
            res.status(500).json({error: "Recurso não encontrado"})
        }
    },

    async getOne(req: Request, res: Response) : Promise<void>{
        try{
            const user = UsuarioService.getOne(Number(req.params.id))
            if(!user)
                res.status(404).json({error: "Recurso não encontrado"})
        }catch{
                res.status(500).json({error: serveError})
        }
    },

    async create(req: Request, res: Response) : Promise<void>{
        try{
            const user = await UsuarioService.create(req.body)
            res.status(201).json(user)
        }catch{
            res.status(500).json({error: serveError})
        }
    },

    async update(req: Request, res: Response) : Promise<void>{
        try{
            const updateData = await UsuarioService.update(Number(req.params.id), req.body)
            console.log(updateData)
            if(!updateData)
                res.status(404).json({error: notFound})

            res.json("Recurso editado com sucesso")
        }catch{
            res.status(500).json({error: serveError})
        }
    },

    async delete(req: Request, res: Response) : Promise<void>{
        try{
            const delUser = await UsuarioService.delete(Number(req.params.id))
            if(!delUser)
                res.status(404).json({error: notFound})

            res.json("Recurso deletado com sucesso")
        }catch{
            res.status(500).json({error: serveError})
        }
    },
}