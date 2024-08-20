import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { HouseOptions } from './interfaces/HouseOptions.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/models')
  models() {
    return this.appService.getHouseModels();
  }

  @Get('options/:modelName')
  getHouseOptions(@Param('modelName') modelName: string): HouseOptions[] {
    return this.appService.getHouseOptions(modelName);
  }
}
