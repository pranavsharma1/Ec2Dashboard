import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {ServersComponent} from "./servers/servers.component";

const routes: Routes = [
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'dashboard', component: ServersComponent},
  { path: '', component: SigninComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
