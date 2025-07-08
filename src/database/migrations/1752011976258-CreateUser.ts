import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1752011976258 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
          await queryRunner.createTable(
                    new Table({
                        name: "usuarios",
                        columns : [
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
                                length: 
                                '100'
                            },
                            {
                                name: 'email',
                                type: 'varchar',
                                length: 
                                '100'
                            },
                            {
                                name: 'password',
                                type: 'varchar',
                                length: 
                                '100'
                            }
                        ]
        
                    })
                )
            }
        
            public async down(queryRunner: QueryRunner): Promise<void> {
                await queryRunner.dropTable("produtos")
            }

}
