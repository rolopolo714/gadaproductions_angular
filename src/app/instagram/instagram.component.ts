import { Component, OnInit } from '@angular/core';
import { InstagramService} from './instagram.service';


@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  providers:[InstagramService],
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {

  constructor(private InstagramService: InstagramService) {

    this.InstagramService.getData().subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
