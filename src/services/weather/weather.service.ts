import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import OpenWeatherMap from 'openweathermap-ts';
import { CurrentResponse as CurrentWeatherResponse } from 'openweathermap-ts/dist/types';

@Injectable()
export class WeatherService {
  constructor(
    private readonly configService: ConfigService,
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
    private readonly openWeather: OpenWeatherMap,
  ) {}

  async getLocationWeather(location: {
    lat: number;
    long: number;
    zip: string;
  }): Promise<CurrentWeatherResponse> {
    return this.getWeather(location.lat, location.long, location.zip);
  }

  async getWeather(
    lat: number,
    long: number,
    zip: string,
  ): Promise<CurrentWeatherResponse> {
    const cacheKey = `weather-${zip}`;
    const cached = await this.cacheManager.get<CurrentWeatherResponse>(
      cacheKey,
    );

    if (cached) {
      return cached;
    }

    const weather = await this.openWeather.getCurrentWeatherByGeoCoordinates(
      lat,
      long,
    );

    if (weather) {
      this.cacheManager.set(
        cacheKey,
        weather,
        this.configService.getWeatherCacheTtl(),
      );
    }

    return weather;
  }
}
