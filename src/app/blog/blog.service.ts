import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFire, AngularFireDatabase } from 'angularfire2';
import { Blog } from './blog';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {

  constructor(public af: AngularFire) {}

private posts = this.af.database.list('posts',{
  query:{
    orderByChild: 'date',
    limitToLast: 10,
  }
})

  getPosts(){
    return this.posts.map(posts =>{
      return posts.reverse()
    })
  }

  getPost(title: Blog):Observable<any>{
    return this.posts.map((list: Array<any>) =>{
      let result: Blog = new Blog();
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
