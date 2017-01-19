import { Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';




@Component({
  selector: 'app-real-estate-photography',
  templateUrl: './real-estate-photography.component.html',
  styleUrls: ['./real-estate-photography.component.css'],

})

export class RealEstatePhotographyComponent implements OnInit {


realestate: FirebaseListObservable<any[]>
  constructor(private af: AngularFire) {
    this.realestate = af.database.list('/realestate');
  }


  ngOnInit() {

  }

}
