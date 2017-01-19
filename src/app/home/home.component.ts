import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Hello Danilo';
  email = 'macahilas@gmail.com'
  address = {
    street: '236 david hooper',
    city: 'westwood',
    state: 'NJ'
  }

  constructor() { }

  ngOnInit() {
  }

}
