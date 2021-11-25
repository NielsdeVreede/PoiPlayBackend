import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PoiEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column( {length: 50})
    name: string;

    @Column()
    latitude: string

    @Column()
    longitude: string
}
