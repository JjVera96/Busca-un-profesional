import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'capacitate', loadChildren: './capacitate/capacitate.module#CapacitatePageModule' },
  { path: 'configuracion', loadChildren: './configuracion/configuracion.module#ConfiguracionPageModule' },
  { path: 'buscar-profesional', loadChildren: './buscar-profesional/buscar-profesional.module#BuscarProfesionalPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
