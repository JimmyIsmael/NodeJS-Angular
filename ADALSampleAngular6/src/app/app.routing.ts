import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { AuthenticationGuard } from 'microsoft-adal-angular6';

const routes: Routes = [
  {path: 'page-one', component: PageOneComponent, pathMatch: 'full', canActivate: [AuthenticationGuard]},
  {path: 'page-two', component: PageTwoComponent, pathMatch: 'full', canActivate: [AuthenticationGuard]},
  {path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
