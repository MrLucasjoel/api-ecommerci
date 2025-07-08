"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser1752011976258 = void 0;
const typeorm_1 = require("typeorm");
class CreateUser1752011976258 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "usuarios",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: 'nome',
                    type: 'varchar',
                    length: '100'
                },
                {
                    name: 'email',
                    type: 'varchar',
                    length: '100'
                },
                {
                    name: 'password',
                    type: 'varchar',
                    length: '100'
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("produtos");
    }
}
exports.CreateUser1752011976258 = CreateUser1752011976258;
