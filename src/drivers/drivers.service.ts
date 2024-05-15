import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Drivers } from 'src/entities/driver.entity';
import { Repository } from 'typeorm';
import { DriversDtoDomain } from './dto/drivers.dto.domain';
import { QueryFailedError } from 'typeorm';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(Drivers)
    private readonly driversRepository: Repository<Drivers>,
  ) {}

  async findAllDrivers(): Promise<Drivers[]> {
    const drivers = await this.driversRepository.find();
    return drivers;
  }

  async createNewDriver(driver: DriversDtoDomain): Promise<DriversDtoDomain> {
    try {
      const newDriver = await this.driversRepository.save(driver);
      return newDriver;
    } catch (error) {
      if (error instanceof QueryFailedError) {
        const queryFailedError = error as QueryFailedError;
        const error2 = queryFailedError.driverError;
        return Promise.reject({
          message: 'Duplicated email',
          code: JSON.parse(JSON.stringify(error2)).code,
        });
      }
      return Promise.reject();
    }
  }
}
