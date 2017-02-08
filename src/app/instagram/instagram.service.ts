import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import { Instagram } from './instagram'

@Injectable()
export class InstagramService {

  constructor(private http: Http) {}

private url = 'https://api.instagram.com/v1/users/1340786566/media/recent?access_token=XXX'
    getAllData(){
      return this.http.get(this.url).map(res => res.json().data);
    }

  getData(id: Instagram) : Observable<any>{
    return this.http.get(this.url)
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
