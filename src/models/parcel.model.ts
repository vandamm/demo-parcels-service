import { Parcel as ParcelModel, Address, Article } from '@prisma/client';

export type Parcel = ParcelModel & {
  from: Address;
  to: Address;
  articles: Article[];
};
