import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EventEntity } from './event.entity';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
    constructor (private readonly service: EventService) {}

    @Get("/poi/:id")
    getEventsForPoi(@Param('id') id: number): Promise<EventEntity[]> {
        return this.service.getEventsForPoi(id)
    }

    @Get("info/:id")
    getEventInformation(@Param('id') id: number): Promise<EventEntity> {
        return this.service.getEventInformation(id)
    }

    @Post()
    createNewEvent(@Body() event: EventEntity) {
        this.service.createNewEvent(event)
    }
}
