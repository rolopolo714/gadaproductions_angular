import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FoodPhotography } from '../food-photography';
import { FoodPhotographyService } from '../food-photography.service';

@Component({
  selector: 'app-food-photography-detail',
  templateUrl: './food-photography-detail.component.html',
  styleUrls: ['./food-photography-detail.component.css'],
  providers: [FoodPhotographyService],
})
export class FoodPhotographyDetailComponent implements OnInit {

  constructor(private _foodPhotography: FoodPhotographyService, private sanitizer: DomSanitizer, private route: ActivatedRoute) { }

  photos;
  foodPhotography

  ngOnInit() {
    this.route.params.subscribe(params =>{
      let title = params['title'];
      let foodPhotography = this._foodPhotography.getItem(title).subscribe(foodPhotography => this.foodPhotography = foodPhotography)
      this.photos = Array(this.foodPhotography.amount)

    });
  }

}
