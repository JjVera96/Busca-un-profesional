import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FiltrarProfesionalPage } from './filtrar-profesional.page';

const routes: Routes = [
  {
    path: '',
    component: FiltrarProfesionalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FiltrarProfesionalPage]
})
export class FiltrarProfesionalPageModule {}
