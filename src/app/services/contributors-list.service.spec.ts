import { TestBed } from '@angular/core/testing';

import { ContributorsListService } from './contributors-list.service';

describe('ContributorsListService', () => {
  let service: ContributorsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContributorsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
