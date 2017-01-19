import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { VideosService} from './videos.service';
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
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  providers: [VideosService],
})
export class VideosComponent implements OnInit {
  videos
  medium = ''
  lenght = Array(25);
  constructor(private _videosService: VideosService, private sanitizer: DomSanitizer) {
  }

  getVideos(){
    this._videosService.getVideos().toArray().subscribe(videos => this.videos = videos);
  }

  ngOnInit() {
    this.getVideos();
  }
}
