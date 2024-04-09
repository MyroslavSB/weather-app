import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutes} from "./shared/const/routes";

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/main-page/main-page.component').then(mod => mod.MainPageComponent),
    pathMatch: 'full'
  },
  {
    path: AppRoutes.city.routerPath,
    loadComponent: () => import('./pages/city-page/city-page.component').then(mod => mod.CityPageComponent),
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
