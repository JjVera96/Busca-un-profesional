import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitatePage } from './capacitate.page';

describe('CapacitatePage', () => {
  let component: CapacitatePage;
  let fixture: ComponentFixture<CapacitatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacitatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
