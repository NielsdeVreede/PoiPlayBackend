import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttendanceModule } from './attendance/attendance.module';
import { PoiController } from './poi/poi.controller';
import { PoiModule } from './poi/poi.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AttendanceModule,
    PoiModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
