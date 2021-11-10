import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PoiController } from './poi.controller';
import { PoiEntity } from './poi.entity';
import { PoiService } from './poi.service';

@Module({
  imports: [TypeOrmModule.forFeature([PoiEntity])],
  controllers: [PoiController],
  providers: [PoiService]
})
export class PoiModule {}
