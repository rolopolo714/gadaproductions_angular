/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RealEstatePhotographyService } from './real-estate-photography.service';

describe('RealEstatePhotographyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealEstatePhotographyService]
    });
  });

  it('should ...', inject([RealEstatePhotographyService], (service: RealEstatePhotographyService) => {
    expect(service).toBeTruthy();
  }));
});
