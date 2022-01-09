import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Routing
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

//http
import { HttpClientModule} from "@angular/common/http";
import {WelcomeModule} from "./welcome/welcome.module";
import { SharedModule } from "./shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    WelcomeModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
