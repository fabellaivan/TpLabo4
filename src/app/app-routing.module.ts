import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'QuienSoy',
    pathMatch: 'full',
  },
  {
    path: 'QuienSoy',
    loadChildren: () =>
      import('./components/quien-soy/quiensoy.module').then((mod) => mod.QuiensoyModule),
  },
  {
    path: 'Home',
    loadChildren: () =>
      import('./components/home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'Bienvenido',
    loadChildren: () =>
      import('./components/login/login.module').then((mod) => mod.LoginModule),
  },
  {
    path: 'Registro',
    loadChildren: () =>
      import('./components/registrer/registrer.module').then((mod) => mod.RegistrerModule),
  },
  {
    path: 'Juegos',
    loadChildren: () =>
      import('./components/Juegos/juegos.module').then((mod) => mod.JuegosModule)
  }
  
  //  {
  //    path: "**",
  // // component:NotFoundComponent
  //  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
