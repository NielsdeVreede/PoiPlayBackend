import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attendance } from './attendance.entity';


@Injectable()
export class AttendenceService {
  constructor(@InjectRepository(Attendance) private attendanceRepository: Repository<Attendance>) { }

  async getAttendanceById(inputId: number): Promise<number> {
    const [list, count] = await this.attendanceRepository.findAndCount({
      where: {
        poi_id: inputId
      }
    })
    return count;
  }

  async saveAttendance(entity: Attendance) {
    this.attendanceRepository.save(entity);
  }
}
