import { Controller, Get } from '@nestjs/common';
import { PoiEntity } from './poi.entity';
import { PoiService } from './poi.service';

@Controller('poi')
export class PoiController {
    constructor (private readonly service: PoiService) {}

    @Get()
    getAll(): Promise<PoiEntity[]> {
        return this.service.getAllPOIs();
    }
}
