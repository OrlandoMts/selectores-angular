import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'home',
  loadChildren: () => import('./paises/paises.module').then(m => m.PaisesModule)
}, {
  path: '**',
  redirectTo: 'home'
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
