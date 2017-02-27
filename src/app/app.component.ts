import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selected: number;

message = console.log()

    constructor() {
    }

    onSelected(newValue: number) {
      if (this.selected === newValue) {
        this.selected = 0;
      }
      else {
        this.selected = newValue;
      }
    }



  }
