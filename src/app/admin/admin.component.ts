import { Component, OnInit } from '@angular/core';
import {AdminService} from './admin.service';
import { AngularFire, firebaseAuthConfig, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AdminService],
})
export class AdminComponent implements OnInit {


  constructor(private _adminService: AdminService, public af: AngularFire, private router: Router) {

  }

  logOut(){
    this.af.auth.logout();
    console.log('logged out');
    this.router.navigateByUrl('/blog');
  }
  ngOnInit() {
  }

}
