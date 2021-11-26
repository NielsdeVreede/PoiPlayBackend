import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Attendance } from 'src/attendance/attendance.entity';
import { Repository } from 'typeorm';
import { EventEntity } from './event.entity';

@Injectable()
export class EventService {
    constructor(
        @InjectRepository(EventEntity) private eventRepository: Repository<EventEntity>,
        @InjectRepository(Attendance) private attendanceRepository: Repository<Attendance>
        ) { }

    async getEventsForPoi(id: number): Promise<EventEntity[]> {
        const list = await this.eventRepository.find({
            where: {
                poi_id: id
            }
        });
        return list;
    }

    async getEventInformation(id: number): Promise<EventEntity> {
        const event = await this.eventRepository.findOne(id)
        const attendees = await this.attendanceRepository.find({
            where: {
                event_id: id
            }
        })

        event.attendees = (attendees)
        return event;
    }

    async createNewEvent(event: EventEntity) {
        this.eventRepository.save(event)
    }
}
