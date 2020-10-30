import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserModuleModule } from './user-module/user-module.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { UsersComponent } from './users/users.component';
import { CustomStyleDirective } from './custom-style.directive';
import { UserlistlazyComponent } from './userlistlazy/userlistlazy.component';
import { AdminlazylistComponent } from './adminlazylist/adminlazylist.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { UserrecapModule } from './userrecap/userrecap.module';
// import { AdminModule } from './admin/admin.module';
// import { UserroutingModule } from './userrouting/userrouting.module';
@NgModule({
  declarations: [
    AppComponent,
    //UserListComponent,
    //HeaderComponent,
    //FooterComponent,
    UsersComponent,
    CustomStyleDirective,
    UserlistlazyComponent,
    AdminlazylistComponent,
  ], // for components
  imports: [
    BrowserModule,
    AppRoutingModule,
    //UserModuleModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    HttpClientModule,
    //UserRecapModule,
    //UserrecapModule,
    //AdminModule,
    //UserroutingModule,
    ReactiveFormsModule,
  ], // for modules
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
