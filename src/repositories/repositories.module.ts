import { Module } from '@nestjs/common';
import { ParcelRepository } from './parcel.repository';
import { PrismaModule } from '../services/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ParcelRepository],
  exports: [ParcelRepository],
})
export class RepositoriesModule {}
