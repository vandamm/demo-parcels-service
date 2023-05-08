import { Module } from '@nestjs/common';
import { ParcelService } from './services/parcel/parcel.service';
import { RepositoriesModule } from './repositories/repositories.module';
import { ConfigService } from './services/config/config.service';
import { ConfigModule } from './services/config/config.module';
import { CacheModule } from '@nestjs/cache-manager';
import { WeatherModule } from './services/weather/weather.module';

@Module({
  imports: [
    ConfigModule,
    RepositoriesModule,
    CacheModule.register({ isGlobal: true }),
    WeatherModule,
  ],
  providers: [ParcelService, ConfigService],
})
export class AppModule {}
