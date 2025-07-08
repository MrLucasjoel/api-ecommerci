import { AppDataSource } from "../database/data-source";
import { Produto } from "../entities/Produto";

const repo = AppDataSource.getRepository(Produto);

export const ProdutoService = {
    async criar(data: Partial<Produto>): Promise<Produto> {
        const produto = repo.create(data);
        await repo.save(produto);
        return produto
    },

    async listar(): Promise<Produto[]>{
        return await repo.find();
    }
}