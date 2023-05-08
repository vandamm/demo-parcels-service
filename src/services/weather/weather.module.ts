import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import OpenWeatherMap from 'openweathermap-ts';
import { ConfigService } from '../config/config.service';
import { WeatherService } from './weather.service';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: OpenWeatherMap,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        new OpenWeatherMap({
          units: 'metric',
          apiKey: configService.getWeatherApiKey(),
        }),
    },
    WeatherService,
  ],
  exports: [WeatherService],
})
export class WeatherModule {}
