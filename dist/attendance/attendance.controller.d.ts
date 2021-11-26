import { Attendance } from './attendance.entity';
import { AttendenceService } from './attendance.service';
export declare class AttendenceController {
    private readonly service;
    constructor(service: AttendenceService);
    getDefaultAttandence(id: number): Promise<number>;
    saveNewAttendance(attendance: Attendance): void;
}
