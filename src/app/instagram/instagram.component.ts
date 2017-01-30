import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { InstagramService} from './instagram.service';
import { Instagram } from './instagram';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml, } from '@angular/platform-browser';


@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
@Pipe({ name: 'safeUrl'})
export class SafeUrlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustUrl(value);
  }
}

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  providers:[InstagramService],
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {

  constructor(private _instagramService: InstagramService, private sanitizer: DomSanitizer) {}

list

getAllData(){
  this._instagramService.getAllData().subscribe(list => this.list = list)
}
  ngOnInit() {
    this.getAllData();
  }

}
