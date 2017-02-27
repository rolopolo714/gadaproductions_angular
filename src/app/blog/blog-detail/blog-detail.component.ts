import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';



@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
  providers: [BlogService]
})
export class BlogDetailComponent implements OnInit {

  constructor(private _blogService: BlogService, private route: ActivatedRoute) { }

  posts;

  ngOnInit() {
    this.route.params.subscribe(params =>{
      let title = params['id']
    })
  }
}
