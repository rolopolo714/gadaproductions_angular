/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AnimationsService } from './animations.service';

describe('AnimationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimationsService]
    });
  });

  it('should ...', inject([AnimationsService], (service: AnimationsService) => {
    expect(service).toBeTruthy();
  }));
});
