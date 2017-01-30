import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FoodPhotography } from './food-photography';
import { AngularFire, FirebaseListObservable } from 'angularfire2'
import 'rxjs/add/operator/map';


@Injectable()
export class FoodPhotographyService {

  constructor(private af: AngularFire) { }

private foodPhotography = this.af.database.list('food');

getItems(){
  return this.foodPhotography;
}

getItem(title: FoodPhotography) : Observable<any>{
  return this.foodPhotography.map((list: Array<any>) => {
    let result: FoodPhotography = new FoodPhotography();
    if (list){
      list.forEach(element => {
        if (element.title === title){
          result = element
        }
      });
      return result
    }
  })
}
}
