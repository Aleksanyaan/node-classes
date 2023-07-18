import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    age: number

    @Column()
    email: string
}