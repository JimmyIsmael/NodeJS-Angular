import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateUsersComponent } from './create-users/create-users.component';
import { routingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { ListUsersComponent } from './list-users/list-users.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CreateUsersComponent,
    HomeComponent,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    routingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
