import { TestBed } from '@angular/core/testing';

import { TvshowdataService } from './tvshowdata.service';

describe('TvshowdataService', () => {
  let service: TvshowdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvshowdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
