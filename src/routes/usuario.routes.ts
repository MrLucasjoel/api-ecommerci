import { Router } from "express";
import {
  listarUsuarios,
  adicionarUsuario,
  editarUsuario,
  deletarUsuario
} from "../controllers/usuario.controller";

const router = Router();

router.get("/", listarUsuarios);
router.post("/", adicionarUsuario);
router.put("/:id", editarUsuario); 
router.delete("/:id", deletarUsuario);

export default router;