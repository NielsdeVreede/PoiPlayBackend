import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Attendance {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    poi_id: string;

    @Column('date') 
    date: Date;

    @Column({ nullable: true })
    name!: string

    @Column({ nullable: true })
    event_id!: number
}
