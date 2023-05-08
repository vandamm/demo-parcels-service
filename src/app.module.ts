import { Module } from '@nestjs/common';
import { ParcelService } from './services/parcel/parcel.service';
import { RepositoriesModule } from './repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  providers: [ParcelService],
})
export class AppModule {}
