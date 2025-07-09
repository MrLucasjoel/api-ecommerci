import { AppDataSource } from "../database/data-source";
import { Usuario } from "../entities/Usuario";
const bcrypt = require('Bcrypt')
const saltRounds = 10

const repo = AppDataSource.getRepository(Usuario)

export const UsuarioService = {

    async getAll() : Promise<Usuario[]>{
        return await repo.find()
    },

    async getOne(id: number) : Promise<Usuario | null>{
        return await repo.findOneBy({ id })
    },

    async create(data: Partial<Usuario>) : Promise<Usuario>{
        data.password = await bcrypt.hash(data.password, saltRounds)
        const user = repo.create(data)
        await repo.save(user)
        return user 
    },

    async update(id: number, data: Partial<Usuario>): Promise<Usuario | null>{
        const user = await repo.findOneBy({ id })
        if(!user)
            return null

        repo.merge(user, data)
        await repo.save(user)
        return user
    },

    async delete(id: number) : Promise<Usuario | null>{
        const user = await repo.findOneBy({ id })
        if(!user)
            return null

        await repo.remove(user)
        return user
    }
}