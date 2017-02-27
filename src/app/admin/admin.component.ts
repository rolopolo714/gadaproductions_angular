import { Component, OnInit } from '@angular/core';
import {AdminService} from './admin.service';
import { AngularFire, firebaseAuthConfig, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import * as firebase from 'firebase'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AdminService],
})
export class AdminComponent implements OnInit {


posts: FirebaseListObservable<any>;
postsForm: any;

  constructor(
                private _adminService: AdminService,
                public af: AngularFire,
                private router: Router,
                private fb: FormBuilder,
                )
                {
                  this.posts = this.af.database.list("/posts");
                  this.postsForm = this.fb.group({
                    'title': ['', Validators.required],
                    'post': ['', Validators.required],
                  })
                }

  createPost(data){

    data.date = firebase.database.ServerValue.TIMESTAMP
    data.user = firebase.auth().currentUser.email
    data.uid = firebase.auth().currentUser.uid
    this.posts.push(data)

  }
// THIS IS TO LEARN ABOUT FIREBASE------------------
// storage = firebase.storage()
// storageRef = this.storage.ref()
// aldenPhoto = this.storageRef.child('alden_park/alden_park_1.jpg')


  logOut(){
    this.af.auth.logout();
    this.router.navigateByUrl('/blog');
  }
  ngOnInit() {
    // console.log(this.aldenPhoto.name)
  }

}
