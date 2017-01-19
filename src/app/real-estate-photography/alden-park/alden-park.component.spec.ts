/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AldenParkComponent } from './alden-park.component';

describe('AldenParkComponent', () => {
  let component: AldenParkComponent;
  let fixture: ComponentFixture<AldenParkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AldenParkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AldenParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
