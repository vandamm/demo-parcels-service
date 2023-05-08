import { Injectable } from '@nestjs/common';

import { PrismaService } from '../services/prisma/prisma.service';
import { Parcel } from '../models/parcel.model';

@Injectable()
export class ParcelRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async find(identifier: string, carrier: string): Promise<Parcel> {
    return this.prismaService.parcel.findUnique({
      where: {
        identifier_carrier: {
          identifier,
          carrier,
        },
      },
      include: {
        from: true,
        to: true,
        articles: true,
      },
    });
  }
}
