import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.parcel.upsert({
    where: {
      identifier_carrier: {
        identifier: 'TN12345678',
        carrier: 'DHL',
      },
    },
    update: {},
    create: {
      identifier: 'TN12345678',
      carrier: 'DHL',
      from: {
        create: {
          raw: 'Street 1, 10115 Berlin, Germany',
          zip: '10115',
          country: 'DE',
          lat: 52.532,
          long: 13.384,
        },
      },
      to: {
        create: {
          raw: 'Street 10, 75001 Paris, France',
          zip: '75001',
          country: 'FR',
          lat: 48.8566,
          long: 2.3522,
        },
      },
      articles: {
        create: [
          {
            name: 'Laptop',
            quantity: 1,
            price: 800,
            sku: 'LP123',
          },
          {
            name: 'Mouse',
            quantity: 1,
            price: 25,
            sku: 'MO456',
          },
        ],
      },
    },
  });

  await prisma.parcel.upsert({
    where: {
      identifier_carrier: {
        identifier: 'TN12345679',
        carrier: 'UPS',
      },
    },
    update: {},
    create: {
      identifier: 'TN12345679',
      carrier: 'UPS',
      from: {
        create: {
          raw: 'Street 2, 20144 Hamburg, Germany',
          zip: '20144',
          country: 'DE',
          lat: 52.532,
          long: 13.384,
        },
      },
      to: {
        create: {
          raw: 'Street 20, 1000 Brussels, Belgium',
          zip: '1000',
          country: 'BE',
          lat: 48.8566,
          long: 2.3522,
        },
      },
      articles: {
        create: [
          {
            name: 'Monitor',
            quantity: 2,
            price: 200,
            sku: 'MT789',
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
