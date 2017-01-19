/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LafayetteAptsComponent } from './lafayette-apts.component';

describe('LafayetteAptsComponent', () => {
  let component: LafayetteAptsComponent;
  let fixture: ComponentFixture<LafayetteAptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LafayetteAptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LafayetteAptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
