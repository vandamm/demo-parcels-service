import { Injectable } from '@nestjs/common';
import { ParcelRepository } from '../../repositories/parcel.repository';
import { Parcel } from '../../models/parcel.model';

@Injectable()
export class ParcelService {
  constructor(private readonly parcelRepository: ParcelRepository) {}

  async find(identifier: string, carrier: string): Promise<Parcel> {
    return await this.parcelRepository.find(identifier, carrier);
  }
}
