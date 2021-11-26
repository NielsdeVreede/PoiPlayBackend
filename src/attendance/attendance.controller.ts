import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Attendance } from './attendance.entity';
import { AttendenceService } from './attendance.service';

@Controller('attendance')
export class AttendenceController {
    constructor (private readonly service: AttendenceService) {}

    @Get("/:id")
    async getDefaultAttandence(@Param('id') id: number): Promise<number> {
        return await this.service.getAttendanceById(id);
    }

    @Post()
    saveNewAttendance(@Body() attendance: Attendance) {
        attendance.date = new Date();
        this.service.saveAttendance(attendance)
    }
}
