import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { UserLoginRecapComponent } from './userrecap/user-login-recap/user-login-recap.component';
// import { UserSignupRecapComponent } from './userrecap/user-signup-recap/user-signup-recap.component';

const routes: Routes = [
  // {
  //   path: 'adminlazy',
  //   loadChildren: () =>
  //     import('./adminlazy/adminlazy.module').then((mod) => mod.AdminlazyModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
