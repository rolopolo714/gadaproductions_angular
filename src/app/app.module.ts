import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import {Ng2PaginationModule, PaginatePipe} from 'ng2-pagination';
import { AlertModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { HomeComponent } from './home/home.component';
import { RealEstatePhotographyComponent } from './real-estate-photography/real-estate-photography.component';
import { FoodPhotographyComponent } from './food-photography/food-photography.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { AnimationsComponent } from './animations/animations.component';
import { AppRoutingModule } from './app-routing.module';
import { InstagramComponent } from './instagram/instagram.component';
// import {InstagramService} from './instagram/instagram.service';
import * as spinner from 'ng2-spin-kit/app/spinners';
import { AboutComponent } from './about/about.component';
import {AngularFireModule} from 'angularfire2';
import {FireBaseConfig} from '../environments/firebase.config';
import { SafeHtmlPipe } from './videos/videos.component';
import { SafeUrlPipe } from './videos/videos.component';
import { VideoDetailComponent } from './videos/video-detail/video-detail.component';
import { RealEstatePhotographyDetailComponent } from './real-estate-photography/real-estate-photography-detail/real-estate-photography-detail.component';
import { AnimationDetailComponent } from './animations/animation-detail/animation-detail.component';
import { InstagramDetailComponent } from './instagram/instagram-detail/instagram-detail.component';
import { FoodPhotographyDetailComponent } from './food-photography/food-photography-detail/food-photography-detail.component';
import { ControlMessagesComponent } from './contact/control-messages.component';





@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    HomeComponent,
    RealEstatePhotographyComponent,
    FoodPhotographyComponent,
    TeamComponent,
    ContactComponent,
    AnimationsComponent,
    InstagramComponent,
    spinner.CircleComponent,
    AboutComponent,
    SafeHtmlPipe,
    SafeUrlPipe,
    VideoDetailComponent,
    RealEstatePhotographyDetailComponent,
    AnimationDetailComponent,
    InstagramDetailComponent,
    FoodPhotographyDetailComponent,
    ControlMessagesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AlertModule,
    AppRoutingModule,
    // NgbModule,
    Ng2PaginationModule,
    AngularFireModule.initializeApp(FireBaseConfig),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
