import { Injectable } from '@nestjs/common';
import { HouseModel } from './interfaces/HouseModel.interface';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { HouseOptions } from './interfaces/HouseOptions.interface';
import { HouseConfigurator } from './interfaces/HouseConfigurator.interface';

@Injectable()
export class AppService {
  private readonly dataPath = path.join(__dirname, '..', 'data');

  getHouseModels(): HouseModel[] {
    const data = fs.readFileSync(
      path.join(this.dataPath, 'models.data'),
      'utf-8',
    );
    return JSON.parse(data);
  }
  getHouseOptions(modelName: string): HouseOptions[] {
    const data = fs.readFileSync(
      path.join(this.dataPath, `${modelName}-options.json`),
      'utf-8',
    );
    return JSON.parse(data);
  }
  sendOfferDetails(data: HouseConfigurator): HouseConfigurator {
    return data;
  }
}
