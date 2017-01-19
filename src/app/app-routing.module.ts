import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {FoodPhotographyComponent} from './food-photography/food-photography.component';
import {RealEstatePhotographyComponent} from './real-estate-photography/real-estate-photography.component';
import {TeamComponent} from './team/team.component';
import {VideosComponent} from './videos/videos.component';
import {AnimationsComponent} from './animations/animations.component';
import {InstagramComponent} from './instagram/instagram.component';
import {AboutComponent} from './about/about.component';
import {AldenParkComponent} from './real-estate-photography/alden-park/alden-park.component';
import {ScotchbrookComponent} from './real-estate-photography/scotchbrook/scotchbrook.component';
import { LafayetteAptsComponent } from './real-estate-photography/lafayette-apts/lafayette-apts.component';
import { VideoDetailComponent } from './videos/video-detail/video-detail.component'


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'team', component: TeamComponent},
  { path: 'food-photography', component: FoodPhotographyComponent},
  { path: 'real-estate-photography', component: RealEstatePhotographyComponent},
  { path: 'videos', component: VideosComponent},
  { path: 'video/:resource_key', component: VideoDetailComponent},
  { path: 'animations', component: AnimationsComponent},
  { path: 'instagram', component: InstagramComponent},
  { path: 'about', component: AboutComponent},
  { path: 'alden-park', component: AldenParkComponent},
  { path: 'scotchbrook', component: ScotchbrookComponent},
  { path: 'lafayette-apts', component: LafayetteAptsComponent},


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
