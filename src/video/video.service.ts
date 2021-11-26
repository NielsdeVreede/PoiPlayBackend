import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VideoEntity } from './video.entity';

@Injectable()
export class VideoService {
    @InjectRepository(VideoEntity) private repository: Repository<VideoEntity>

    async getVideosForPoi(id: number): Promise<VideoEntity[]> {
        return await this.repository.find({
            where: { poi_id: id }
        })
    }

    createNewVideo(video: VideoEntity) {
        this.repository.save(video)
    }
}
