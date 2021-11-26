import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttendanceModule } from './attendance/attendance.module';
import { PoiModule } from './poi/poi.module';
import { EventModule } from './event/event.module';
import { VideoModule } from './video/video.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AttendanceModule,
    PoiModule,
    EventModule,
    VideoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
