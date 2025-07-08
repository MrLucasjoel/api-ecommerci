import { Router } from "express";
import { ProdutoController } from "../controllers/ProdutoController";

const routes = Router()

routes.get('/', ProdutoController.listar)
routes.post('/:id', ProdutoController.buscar)
routes.post('/', ProdutoController.criar)
routes.put('/:id', ProdutoController.atualizar)
routes.delete('/:id', ProdutoController.deletar)

export default routes