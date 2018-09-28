import { TestBed, inject } from '@angular/core/testing';

import { FormatDateTimeService } from './format-date-time.service';

describe('FormatDateTimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormatDateTimeService]
    });
  });

  it('should be created', inject([FormatDateTimeService], (service: FormatDateTimeService) => {
    expect(service).toBeTruthy();
  }));
});
