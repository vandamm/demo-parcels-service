import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { ParcelService } from '../services/parcel/parcel.service';
import { WeatherService } from '../services/weather/weather.service';

@Controller('parcel')
export class ParcelController {
  constructor(
    private readonly parcelService: ParcelService,
    private readonly weatherService: WeatherService,
  ) {}

  @Get('track')
  async track(
    @Query('identifier')
    identifier: string,
    @Query('carrier')
    carrier: string,
  ) {
    if (!identifier)
      throw new HttpException('Identifier is required', HttpStatus.BAD_REQUEST);
    if (!carrier)
      throw new HttpException('Carrier is required', HttpStatus.BAD_REQUEST);

    try {
      const parcel = await this.parcelService.find(identifier, carrier);

      if (!parcel)
        throw new HttpException('Parcel not found', HttpStatus.NOT_FOUND);

      const { from, to, ...rest } = parcel;

      const [fromWeather, toWeather] = await Promise.all([
        this.weatherService.getLocationWeather(parcel.from),
        this.weatherService.getLocationWeather(parcel.to),
      ]);

      return {
        ...rest,
        from: {
          ...from,
          weather: fromWeather,
        },
        to: {
          ...to,
          weather: toWeather,
        },
      };
    } catch (error) {
      if (!(error instanceof HttpException))
        throw new HttpException(
          'Internal Server Error',
          HttpStatus.INTERNAL_SERVER_ERROR,
          { cause: error },
        );

      throw error;
    }
  }
}
