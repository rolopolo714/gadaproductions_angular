import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import { Instagram } from './instagram'
import {Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class InstagramService {

  constructor(private http: Http, private _jsonp: Jsonp) {}

private url = 'https://api.instagram.com/v1/users/1340786566/media/recent?access_token=1340786566.1677ed0.b1fed6c8114c48c68eda18fa6cea09ed&callback=JSON_CALLBACK';

    getAllData(){
      // return this._jsonp.get(this.url).map(res => res.json().data);
      return this._jsonp.get(this.url).map(res => res.json().data);
    }

  getData(id: Instagram) : Observable<any>{
    return this._jsonp.get(this.url)
    .map(res => res.json().data)
    .map((list:Array<any>) => {
      let result: Instagram = new Instagram();
      if (list){
        list.forEach(element => {
          if (element.id === id){
            result = element;
          }
        });
        return result;
      }
    });
  }

}
