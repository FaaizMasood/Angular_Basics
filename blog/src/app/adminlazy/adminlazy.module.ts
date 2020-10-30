import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminlazyRoutingModule } from './adminlazy-routing.module';
import { LoginlazyComponent } from './loginlazy/loginlazy.component';
import { ListlazyComponent } from './listlazy/listlazy.component';

//console.warn('admin module');
@NgModule({
  declarations: [LoginlazyComponent, ListlazyComponent],
  imports: [CommonModule, AdminlazyRoutingModule],
})
export class AdminlazyModule {}
