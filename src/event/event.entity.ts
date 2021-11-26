import { Attendance } from "src/attendance/attendance.entity";
import { Column, Entity, PrimaryGeneratedColumn, TableForeignKey, Timestamp } from "typeorm";

@Entity()
export class EventEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column( {length: 300} )
    name: string;

    @Column()
    poi_id: number;

    @Column()
    time: Date

    attendees: Attendance[]
}