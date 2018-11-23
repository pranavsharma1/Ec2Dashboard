import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConfirmEqualvalidatorDirective } from './shared/confirm-equalvalidator.directive';




@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    FooterComponent,
    ConfirmEqualvalidatorDirective,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
