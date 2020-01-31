import { TestBed } from '@angular/core/testing';

import { GetAllDoctorsService } from './get-all-doctors.service';

describe('GetAllDoctorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllDoctorsService = TestBed.get(GetAllDoctorsService);
    expect(service).toBeTruthy();
  });
});
