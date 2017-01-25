import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';



@Injectable()
export class InstagramService {

  constructor(private http: Http) {


 }

    getData(){

      return this.http.get('https://api.instagram.com/v1/users/1340786566/media/recent?access_token=')
      .map(res => res.json());
    }

}
