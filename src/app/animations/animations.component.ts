
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { AnimationsService} from './animations.service'
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
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  providers: [AnimationsService],
})
export class AnimationsComponent implements OnInit {
  videos

  constructor(private _animationService: AnimationsService, private sanitizer: DomSanitizer) {}

  getVideos(){
    this._animationService.getVideos().subscribe(videos => this.videos = videos);
  }

  ngOnInit() {
    this.getVideos();
  }
}
