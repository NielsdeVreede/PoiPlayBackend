import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VideoEntity } from './video.entity';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
    constructor( private readonly service: VideoService){}

    @Get('/poi/:id')
    getVideosForPoi(@Param('id') id: number) : Promise<VideoEntity[]>{
        return this.service.getVideosForPoi(id)
    }

    @Post()
    createNewVideo(@Body() video: VideoEntity): string {
        this.service.createNewVideo(video)
        return "success"
    }
}
