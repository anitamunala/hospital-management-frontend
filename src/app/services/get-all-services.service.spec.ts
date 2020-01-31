import { TestBed } from '@angular/core/testing';

import { GetAllServicesService } from './get-all-services.service';

describe('GetAllServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllServicesService = TestBed.get(GetAllServicesService);
    expect(service).toBeTruthy();
  });
});
