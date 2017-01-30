import { Component,  OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RealEstatePhotography } from '../real-estate-photography';
import { RealEstatePhotographyService } from '../real-estate-photography.service';

@Component({
  selector: 'app-real-estate-photography-detail',
  templateUrl: './real-estate-photography-detail.component.html',
  styleUrls: ['./real-estate-photography-detail.component.css'],
  providers: [RealEstatePhotographyService],
})
export class RealEstatePhotographyDetailComponent implements OnInit {

photos = Array(20)
realEstate

  constructor(private route: ActivatedRoute, private _realEstatePhotographyService: RealEstatePhotographyService, private sanitizer: DomSanitizer) {}

  ngOnInit(){
    this.route.params.subscribe(params => {
      let title = params['title'];
      let realEstate = this._realEstatePhotographyService.getItem(title).subscribe(realEstate => {
        this.realEstate = realEstate
      })
    });
  }
}
