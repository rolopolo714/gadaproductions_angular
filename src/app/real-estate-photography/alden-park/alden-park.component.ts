import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-alden-park',
  templateUrl: './alden-park.component.html',
  styleUrls: ['./alden-park.component.css']
})
export class AldenParkComponent implements OnInit {

  images: any;

  photos = Array(63)

    constructor(private sanitizer: DomSanitizer) {
        this.images = sanitizer.bypassSecurityTrustUrl('https://s3.amazonaws.com/gadaphotos/photos/portfolio/alden_park/alden_park_')
    }

  ngOnInit() {
  }

}
