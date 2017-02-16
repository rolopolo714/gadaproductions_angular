import { Component, OnInit, ElementRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Client } from './client';
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  clients: FirebaseListObservable<any[]>;
  newClient: string;

  constructor(af: AngularFire, private elementRef: ElementRef) {
    this.clients = af.database.list('/clients');
  }

  addItem(name: string, phoneNumber: number) {
      this.clients.push({ text: name, phoneNumber });
    }

  redirect(){
    location.href = "/home";
  }

  ngOnInit() {
  }

}
