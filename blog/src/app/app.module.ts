import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserModuleModule } from './user-module/user-module.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, UserListComponent], // for components
  imports: [BrowserModule, AppRoutingModule, UserModuleModule, FormsModule], // for modules
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
