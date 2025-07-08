"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alterprodutos1751635991437 = void 0;
const typeorm_1 = require("typeorm");
class Alterprodutos1751635991437 {
    async up(queryRunner) {
        await queryRunner.addColumns('produtos', [
            new typeorm_1.TableColumn({
                name: "quantidade",
                type: "int",
                isNullable: false,
                default: 0
            }),
            new typeorm_1.TableColumn({
                name: "ncm",
                type: "char",
                length: '8',
                isNullable: false
            })
        ]);
    }
    async down(queryRunner) {
        await queryRunner.dropColumns("produtos", ["quantidades", "ncm"]);
    }
}
exports.Alterprodutos1751635991437 = Alterprodutos1751635991437;
