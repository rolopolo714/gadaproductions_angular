import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser'

@Component({
  selector: 'app-lafayette-apts',
  templateUrl: './lafayette-apts.component.html',
  styleUrls: ['./lafayette-apts.component.css']
})
export class LafayetteAptsComponent implements OnInit {
  images: any;
  photos = Array(29)
      constructor(private sanitizer: DomSanitizer) {
        this.images = sanitizer.bypassSecurityTrustUrl('https://s3.amazonaws.com/gadaphotos/photos/portfolio/lafayette_apts/lafayette_apts_')
    }
  ngOnInit() {
  }

}
