import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../instagram.service'
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml } from '../../../../node_modules/@angular/platform-browser/src/platform-browser';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-instagram-detail',
  templateUrl: './instagram-detail.component.html',
  styleUrls: ['./instagram-detail.component.css'],
  providers: [InstagramService],
})
export class InstagramDetailComponent implements OnInit {

  constructor(private _instagramService: InstagramService, private sanitizer: DomSanitizer, private route: ActivatedRoute) { }
  data

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      let data = this._instagramService.getData(id).subscribe
      (data => this.data = data)
    });
  }

}
