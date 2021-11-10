import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PoiEntity } from './poi.entity';

@Injectable()
export class PoiService {
    constructor(@InjectRepository(PoiEntity) private poiRepository: Repository<PoiEntity>) { }

    async getAllPOIs(): Promise<PoiEntity[]> {
        const [list, count] = await this.poiRepository.findAndCount();
        console.log(list);
        return list;
    }
}
