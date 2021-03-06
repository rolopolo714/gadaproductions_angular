import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {InstagramComponent} from './instagram/instagram.component';
import {AboutComponent} from './about/about.component';
import {TeamComponent} from './team/team.component';

import {FoodPhotographyComponent} from './food-photography/food-photography.component';
import {RealEstatePhotographyComponent} from './real-estate-photography/real-estate-photography.component';
import {VideosComponent} from './videos/videos.component';
import {AnimationsComponent} from './animations/animations.component';
import {BlogComponent} from './blog/blog.component';
import {AdminComponent} from './admin/admin.component';

import {VideoDetailComponent} from './videos/video-detail/video-detail.component';
import {AnimationDetailComponent} from './animations/animation-detail/animation-detail.component';
import {RealEstatePhotographyDetailComponent} from './real-estate-photography/real-estate-photography-detail/real-estate-photography-detail.component';
import {FoodPhotographyDetailComponent} from './food-photography/food-photography-detail/food-photography-detail.component';
import {InstagramDetailComponent} from './instagram/instagram-detail/instagram-detail.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { AuthService } from './auth.service';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'team', component: TeamComponent},
  { path: 'food-photography', component: FoodPhotographyComponent},
  { path: 'food-photography/:title', component: FoodPhotographyDetailComponent},
  { path: 'real-estate-photography', component: RealEstatePhotographyComponent},
  { path: 'real-estate-photography/:title', component: RealEstatePhotographyDetailComponent},
  { path: 'videos', component: VideosComponent},
  { path: 'video/:resource_key', component: VideoDetailComponent},
  { path: 'animations', component: AnimationsComponent},
  { path: 'animation/:resource_key', component: AnimationDetailComponent},
  { path: 'instagram', component: InstagramComponent},
  { path: 'instagram/:id', component: InstagramDetailComponent},
  { path: 'about', component: AboutComponent},
  { path: 'blog', component: BlogComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthService] },
  { path: 'admin-login', component: AdminLoginComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
