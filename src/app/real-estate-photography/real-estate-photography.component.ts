import { Component, OnInit} from '@angular/core';
import { RealEstatePhotographyService } from './real-estate-photography.service'
import { RealEstatePhotography } from './real-estate-photography'

@Component({
  selector: 'app-real-estate-photography',
  templateUrl: './real-estate-photography.component.html',
  styleUrls: ['./real-estate-photography.component.css'],
  providers: [RealEstatePhotographyService],
})

export class RealEstatePhotographyComponent implements OnInit {

  realEstate
  constructor(private _realEstatePhotographyService: RealEstatePhotographyService) {}

  getItems(){
    this._realEstatePhotographyService.getItems().subscribe(realEstate => this.realEstate = realEstate );
  }
  ngOnInit() {
    this.getItems()
  }
}
