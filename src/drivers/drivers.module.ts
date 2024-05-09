import { Module } from '@nestjs/common';
import { DriversController } from './drivers.controller';
import { DriversService } from './drivers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drivers } from 'src/entities/driver.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Drivers])],
  controllers: [DriversController],
  providers: [DriversService],
})
export class DriversModule {}
