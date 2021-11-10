import { Repository } from 'typeorm';
import { Attendance } from './attendance.entity';
export declare class AttendenceService {
    private attendanceRepository;
    constructor(attendanceRepository: Repository<Attendance>);
    getAttendanceById(inputId: number): Promise<number>;
    saveAttendance(entity: Attendance): Promise<void>;
}
