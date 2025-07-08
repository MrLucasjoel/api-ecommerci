import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuarios")
export class Usuario{
    @PrimaryGeneratedColumn()
    id!: String;

    @Column()
    nome!: String;

    @Column()
    email!: String;

    @Column()
    password!: String;

}