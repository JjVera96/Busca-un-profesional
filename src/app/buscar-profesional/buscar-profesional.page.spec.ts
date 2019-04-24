import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProfesionalPage } from './buscar-profesional.page';

describe('BuscarProfesionalPage', () => {
  let component: BuscarProfesionalPage;
  let fixture: ComponentFixture<BuscarProfesionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarProfesionalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarProfesionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
