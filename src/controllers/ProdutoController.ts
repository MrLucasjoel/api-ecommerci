import { Request, Response } from "express"
import { ProdutoService } from "../services/ProdutoService";

export const ProdutoController = {

    async listar(req: Request, res: Response) : Promise<void> {
        try {
            // pega os dados, converte p json e retorna mensagem de erro caso ocorra
            const Produtos = await ProdutoService.listar();
        } catch (error) {
            res.status(500).json({erro: "Erro ao listar recursos"})
        }
    },

    criar: async(req: Request, res: Response): Promise<void> => {
        try { 
            const produto = await ProdutoService.criar(req.body);
        } catch (error) {
            res.status(500).json({erro: "Erro ao criar recurso"})
        }
    },

    async buscar(req: Request, res: Response){
        res.status(200).json({status: "sucesso"})
    },

    async atualizar(req: Request, res: Response){
        res.status(200).json({status: "sucesso"})
    },

    async deletar(req: Request, res: Response){
        res.status(200).json({status: "sucesso"})
    },
}