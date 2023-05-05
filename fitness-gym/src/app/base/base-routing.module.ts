// * Base
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// * Components
import BaseComponent from './base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./main/main.module'),
      },
      {
        path: '404',
        loadComponent: () => import('./not-found/not-found.component'),
      },
      { path: '**', redirectTo: '404', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class BaseRoutingModule {}
