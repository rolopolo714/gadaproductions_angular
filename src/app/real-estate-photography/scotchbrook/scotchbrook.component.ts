import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-scotchbrook',
  templateUrl: './scotchbrook.component.html',
  styleUrls: ['./scotchbrook.component.css']
})
export class ScotchbrookComponent implements OnInit {

  images: any;
  photos = Array(23);


  constructor(private sanitizer: DomSanitizer) {
     this.images = sanitizer.bypassSecurityTrustUrl('https://s3.amazonaws.com/gadaphotos/photos/portfolio/scotchbrook/scotchbrook_')}


  ngOnInit() {
  }

}
