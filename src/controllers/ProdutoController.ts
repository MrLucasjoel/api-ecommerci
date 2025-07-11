import { Request, Response } from "express"
import { ProdutoService } from "../services/ProdutoService";

export const ProdutoController = {

    async listar(req: Request, res: Response) : Promise<void> {
        try {
            // pega os dados, converte p json e retorna mensagem de erro caso ocorra
            const Produtos = await ProdutoService.listar();
            res.json(Produtos)
        } catch (error) {
            res.status(500).json({erro: "Erro ao listar recursos"})
        }
    },
   
    criar: async(req: Request, res: Response): Promise<void> => {
         console.log(req.body)
        try { 
            const produto = await ProdutoService.criar(req.body);
            res.status(201).json(produto)
            
        } catch (error) {
            res.status(500).json({erro: error})
        }
  
    },

    async buscar(req: Request, res: Response): Promise<void>{
        const id = Number(req.params.id)
        const produto = await ProdutoService.buscarPorid(id)
        if(!produto) res.status(404).json({erro: "Produto não encontrado"})
            res.status(200).json(produto)
    },

    async atualizar(req: Request, res: Response): Promise<void>{
        const id = Number(req.params.id)
        const atualizado = await ProdutoService.atualizar(id, req.body)
        if(!atualizado) res.status(404).json({erro: "Produto não encontrado"})

            res.status(200).json(atualizado)

    },

    async deletar(req: Request, res: Response): Promise<void>{
        const id = Number(req.params.id)
        const removido = await ProdutoService.deletar(id)
        if(!removido) res.status(404).json({erro: "Produto não encontrado"})

            res.status(200).json({status : "Produto removido com sucesso", produto: removido})
    },
}