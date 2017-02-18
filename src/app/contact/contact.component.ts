import { Component, OnInit, ElementRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Client } from './client';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/add/operator/map';
import {IMyOptions} from 'mydatepicker';
import { ValidationService } from './validation.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ValidationService],
})
export class ContactComponent implements OnInit {

clients: FirebaseListObservable<any[]>;


userForm: any;

  constructor(af: AngularFire, private elementRef: ElementRef, private formBuilder: FormBuilder) {
    this.clients = af.database.list('/clients');
    this.userForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'profile': ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  addItem(name: string, email: string, profile:string) {
      this.clients.push({ name, email, profile});
    }

  // addItem(){
  //   this.clients.push(this.name);
  //
  // }

  redirect(){
    location.href = "/home";
  }

  ngOnInit() {
  }

}
