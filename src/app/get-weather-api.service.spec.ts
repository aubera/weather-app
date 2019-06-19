import { TestBed } from '@angular/core/testing';

import { GetWeatherApiService } from './get-weather-api.service';

describe('GetWeatherApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetWeatherApiService = TestBed.get(GetWeatherApiService);
    expect(service).toBeTruthy();
  });
});
