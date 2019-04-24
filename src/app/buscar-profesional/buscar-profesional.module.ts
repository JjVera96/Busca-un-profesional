import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BuscarProfesionalPage } from './buscar-profesional.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarProfesionalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuscarProfesionalPage]
})
export class BuscarProfesionalPageModule {}
