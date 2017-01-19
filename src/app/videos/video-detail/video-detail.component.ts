import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { VideosService} from '../videos.service'
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

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
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  providers: [VideosService],
})
export class VideoDetailComponent implements OnInit {

video

  constructor(private _videosService: VideosService, private sanitizer: DomSanitizer, private route: ActivatedRoute) {
    route.params.subscribe(params => {(params['resource_key']); // use instead of `id` the actual parameter name defined in your route.
    });
  }
  ngOnInit() {
      this.route.params.subscribe(params =>{
        let resource_key = params['resource_key'];
        let videos = this._videosService.getVideo(resource_key).subscribe(video => {this.video = video})
      });
    }

}
