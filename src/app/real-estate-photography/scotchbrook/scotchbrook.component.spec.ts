/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ScotchbrookComponent } from './scotchbrook.component';

describe('ScotchbrookComponent', () => {
  let component: ScotchbrookComponent;
  let fixture: ComponentFixture<ScotchbrookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScotchbrookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScotchbrookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
