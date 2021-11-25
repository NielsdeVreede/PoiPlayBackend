import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attendance } from 'src/attendance/attendance.entity';
import { EventController } from './event.controller';
import { EventEntity } from './event.entity';
import { EventService } from './event.service';

@Module({
    imports: [TypeOrmModule.forFeature([EventEntity, Attendance])],
    providers: [EventService],
    controllers: [EventController]


})
export class EventModule {}
