import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http, Response, RequestOptions} from '@angular/http';
import { RealEstatePhotography } from './real-estate-photography';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import 'rxjs/add/operator/map';

@Injectable()
export class RealEstatePhotographyService {

  constructor(private af: AngularFire, private http: Http) { }

private realEstate =  this.af.database.list('realestate');


  getItems(){
    return (this.realEstate);
  }

  getItem(title: RealEstatePhotography) : Observable<any>{
    return this.realEstate
    .map((list: Array<any>) => {
      let result: RealEstatePhotography = new RealEstatePhotography();
      if (list){
        list.forEach(element => {
          if (element.title === title){
            result = element
          }
        });
        return result;
      }
    });
  }

}
