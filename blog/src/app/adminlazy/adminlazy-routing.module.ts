import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginlazyComponent } from './loginlazy/loginlazy.component';
import { ListlazyComponent } from './listlazy/listlazy.component';
//console.warn('admin module');
const routes: Routes = [
  {
    path: 'login',
    component: LoginlazyComponent,
  },
  {
    path: 'list',
    component: ListlazyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminlazyRoutingModule {}
