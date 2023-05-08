import { ParcelService } from './parcel.service';

describe('ParcelService', () => {
  let parcelRepository;
  let service: ParcelService;

  beforeEach(async () => {
    parcelRepository = {
      find: jest.fn(),
    };

    service = new ParcelService(parcelRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call parcelRepository.find', async () => {
    await service.find('identifier', 'carrier');

    expect(parcelRepository.find).toHaveBeenCalledWith('identifier', 'carrier');
  });
});
