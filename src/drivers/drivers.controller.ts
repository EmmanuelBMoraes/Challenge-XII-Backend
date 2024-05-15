import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { Response } from 'express';
import { DriversDtoDomain } from './dto/drivers.dto.domain';

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
  async createDriver(@Res() res: Response, @Body() driver: DriversDtoDomain) {
    try {
      const newDriver = await this.driversService.createNewDriver(driver);
      return res.status(201).json(newDriver);
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        code: error.code,
      });
    }
  }
}
