import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarProfesionalPage } from './filtrar-profesional.page';

describe('FiltrarProfesionalPage', () => {
  let component: FiltrarProfesionalPage;
  let fixture: ComponentFixture<FiltrarProfesionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrarProfesionalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarProfesionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
