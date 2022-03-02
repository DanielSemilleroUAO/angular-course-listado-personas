/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LogginServiceService } from './LogginService.service';

describe('Service: LogginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogginServiceService]
    });
  });

  it('should ...', inject([LogginServiceService], (service: LogginServiceService) => {
    expect(service).toBeTruthy();
  }));
});
