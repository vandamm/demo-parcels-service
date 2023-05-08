import { ParcelController } from './parcel.controller';

describe('ParcelController', () => {
  let parcelService;
  let weatherService;
  let controller: ParcelController;

  beforeEach(async () => {
    parcelService = {
      find: jest.fn(),
    };
    weatherService = {
      getLocationWeather: jest.fn(),
    };

    controller = new ParcelController(parcelService, weatherService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
