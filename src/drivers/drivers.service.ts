import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Drivers } from 'src/entities/driver.entity';
import { Repository } from 'typeorm';
import { DriversDtoDomain } from './dto/drivers.dto.domain';

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
      return Promise.reject();
    }
  }
}
