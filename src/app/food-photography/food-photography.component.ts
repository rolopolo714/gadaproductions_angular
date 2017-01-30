import { Component, OnInit } from '@angular/core';
import { FoodPhotographyService } from './food-photography.service';
import { FoodPhotography } from './food-photography';

@Component({
  selector: 'app-food-photography',
  templateUrl: './food-photography.component.html',
  styleUrls: ['./food-photography.component.css'],
  providers: [FoodPhotographyService],
})
export class FoodPhotographyComponent implements OnInit {

  constructor(private _foodPhotography: FoodPhotographyService) { }

  foodPhotography

  getItems(){
    this._foodPhotography.getItems().subscribe(foodPhotography => this.foodPhotography = foodPhotography)
  }
  ngOnInit() {
    return this.getItems();
  }

}
