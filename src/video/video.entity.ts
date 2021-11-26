import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class VideoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column( {length: 50})
    username: string;

    @Column()
    uri: string;

    @Column()
    poi_id: number;
}
