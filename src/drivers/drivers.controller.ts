import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { Response } from 'express';
import { DriversDto } from './dto/drivers.dto/drivers.dto';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Get()
  async findAllDrivers(@Res() res: Response) {
    const drivers = await this.driversService.findAllDrivers();
    return res.status(200).json(drivers);
  }

  @Get(':id')
  findDriverById(@Res() res: Response, @Param('id') id: string) {
    //to be done
  }

  @Post()
  async createDriver(@Res() res: Response, @Body() driverDTO: DriversDto) {
    const newDriver = await this.driversService.createNewDriver(driverDTO);
    return res.status(201).json(newDriver);
  }
}
