import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { VideosService} from '../videos.service'
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  providers: [VideosService],
})
export class VideoDetailComponent implements OnInit {

video

  constructor(private _videosService: VideosService, private sanitizer: DomSanitizer, private route: ActivatedRoute) {
    // route.params.subscribe(params => {(params['resource_key']);
    // });
  }
  ngOnInit() {
      this.route.params.subscribe(params =>{
        let resource_key = params['resource_key'];
        let video = this._videosService.getVideo(resource_key).subscribe(video => {this.video = video})
      });
    }

}
