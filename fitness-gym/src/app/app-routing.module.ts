// * Base
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', loadChildren: () => import('./base/base.module') },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      enableTracing: false,
      useHash: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
