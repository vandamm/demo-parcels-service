import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let configService;
  let cacheManager;
  let openWeatherMap;
  let service: WeatherService;

  beforeEach(async () => {
    configService = {
      getWeatherCacheTtl: jest.fn(),
    };
    cacheManager = {
      get: jest.fn(),
      set: jest.fn(),
    };
    openWeatherMap = {
      getCurrentWeatherByGeoCoordinates: jest.fn(),
    };

    service = new WeatherService(configService, cacheManager, openWeatherMap);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return cached data if available', async () => {
    const result = {};

    cacheManager.get.mockResolvedValueOnce(result);

    const weather = await service.getWeather(1, 2, 'zip');

    expect(cacheManager.get).toHaveBeenCalledWith('weather-zip');
    expect(weather).toBe(result);
  });
});
