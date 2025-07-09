import { Router } from "express";
import { UsuarioController } from "../controllers/usuarioController";
import { Usuario } from "../entities/Usuario";

const routes = Router()
routes.get("/", UsuarioController.getAll)
routes.get("/:id", UsuarioController.getOne)
routes.post("/", UsuarioController.create)
routes.put("/:id", UsuarioController.update)
routes.delete("/:id", UsuarioController.delete)

export default routes