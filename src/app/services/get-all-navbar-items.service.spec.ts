import { TestBed } from '@angular/core/testing';

import { GetAllNavbarItemsService } from './get-all-navbar-items.service';

describe('GetAllNavbarItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllNavbarItemsService = TestBed.get(GetAllNavbarItemsService);
    expect(service).toBeTruthy();
  });
});
