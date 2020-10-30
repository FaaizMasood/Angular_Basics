import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  // {
  //   path: 'admin',
  //   children: [
  //     {
  //       path: 'list',
  //       component: ListComponent,
  //     },
  //     {
  //       path: 'login',
  //       component: LoginComponent,
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
