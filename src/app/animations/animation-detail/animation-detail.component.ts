import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { AnimationsService } from '../animations.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animation-detail',
  templateUrl: './animation-detail.component.html',
  styleUrls: ['./animation-detail.component.css'],
  providers: [AnimationsService],
})
export class AnimationDetailComponent implements OnInit {

  video

    constructor(private _animationsService: AnimationsService, private sanitizer: DomSanitizer, private route: ActivatedRoute) {
      // route.params.subscribe(params => {(params['resource_key']);
      // });
    }
    ngOnInit() {
        this.route.params.subscribe(params =>{
          let resource_key = params['resource_key'];
          let video = this._animationsService.getVideo(resource_key).subscribe(video => {this.video = video})
        });
      }

}
