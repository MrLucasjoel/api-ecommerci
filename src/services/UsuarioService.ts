import { AppDataSource } from "../database/data-source";
import { Usuario } from "../entities/Usuario";

const repo = AppDataSource.getRepository(Usuario);

export const UsuarioService = {
    async adicionar(data: Partial<Usuario>): Promise<Usuario> {
        const usuario = repo.create(data);
        await repo.save(usuario);
        return usuario
    },

    async listar(): Promise<Usuario[]>{
        return await repo.find();
    },

     async buscarPorid(id: string): Promise<Usuario | null>{
        return await repo.findOneBy({ id })
    },
    async atualizar(id: string, data: Partial<Usuario>): Promise<Usuario | null> {
        const usuario = await repo.findOneBy({ id })
        if(!usuario) return null

        repo.merge(usuario, data)
        return await repo.save(usuario)
    },
    async deletar(id: string): Promise<Usuario | null>{
        const usuario = await repo.findOneBy({ id })
        if(!usuario) return null

        await repo.remove(usuario)
        return usuario
    }
}