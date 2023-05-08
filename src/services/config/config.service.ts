import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

const HOUR = 60 * 60 * 1000;

@Injectable()
export class ConfigService {
  constructor(private configService: NestConfigService) {}

  getWeatherApiKey(): string {
    return this.configService.get<string>('WEATHER_API_KEY');
  }

  getWeatherCacheTtl(): number {
    return this.configService.get<number>('WEATHER_CACHE_TTL') || 2 * HOUR;
  }
}
