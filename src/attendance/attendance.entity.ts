import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Attendance {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    poi_id: string;

    @Column('date') 
    date: Date;

    @Column()
    name?: string

    @Column()
    event_id?: number
}
