import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Blog } from './blog';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [BlogService, ],

})
export class BlogComponent implements OnInit {

  constructor(private _blogService: BlogService) { }

  posts

  getItems() {
    this._blogService.getPosts().subscribe(posts => {this.posts = posts})
  }

  ngOnInit() {
    return this.getItems();
  }

}
