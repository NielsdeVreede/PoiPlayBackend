import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Attendance } from './attendance.entity';
import { AttendenceService } from './attendance.service';

@Controller('attendence')
export class AttendenceController {
    constructor (private readonly service: AttendenceService) {}

    @Get("/:id")
    async getDefaultAttandence(@Param('id') id: number): Promise<number> {
        return await this.service.getAttendanceById(id);
    }

    @Post()
    saveNewAttendance(@Body() attendance: Attendance): string {
        attendance.date = new Date();
        this.service.saveAttendance(attendance)
        return "success";
    }
}