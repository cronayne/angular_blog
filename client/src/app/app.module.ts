import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RootComponent } from './root/root.component';
import { ROUTING } from './app.routing';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    RootComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
