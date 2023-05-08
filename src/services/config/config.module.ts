import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { ConfigService } from './config.service';
import { validate } from './config.validation';

@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: './.env',
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      isGlobal: true,
      validate,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
