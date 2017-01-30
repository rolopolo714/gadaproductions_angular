/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FoodPhotographyService } from './food-photography.service';

describe('FoodPhotographyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodPhotographyService]
    });
  });

  it('should ...', inject([FoodPhotographyService], (service: FoodPhotographyService) => {
    expect(service).toBeTruthy();
  }));
});
