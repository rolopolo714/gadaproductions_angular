import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Video} from './video'
import 'rxjs/add/operator/map';


@Injectable()
export class VideosService {

  constructor(private http: Http) { }

private url = 'XXXX'

  getVideos(){
    return this.http.get(this.url).map(res => res.json().data)
  }

  getVideo(resource_key: Video) : Observable<any> {
    return this.http.get(this.url)
      .map(res => res.json().data)
      .map((list: Array<any>) =>{
        let result: Video = new Video();
        if (list) {
          list.forEach(element => {
            if (element.resource_key === resource_key) {
              result = element;
            }
          });
          return result;
        }
      })
  }
}
