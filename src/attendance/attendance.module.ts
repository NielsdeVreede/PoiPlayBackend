import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendenceController } from './attendance.controller';
import { Attendance } from './attendance.entity';
import { AttendenceService } from './attendance.service';

@Module({
    imports: [TypeOrmModule.forFeature([Attendance])],
    providers: [AttendenceService],
    controllers: [AttendenceController],
    })


export class AttendanceModule {}
