import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Routing
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

//http
import { HttpClientModule} from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";
import { RegisterForestComponent } from './components/register-forest/register-forest.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SettingsModule} from "./settings/settings.module";
import {MatCardModule} from "@angular/material/card";
import { RegisterPlotComponent } from './components/register-plot/register-plot.component';
import {ForestUidModule} from "./settings/forestUid/forest-uids.module";


@NgModule({
  declarations: [
    AppComponent,
    RegisterForestComponent,
    RegisterPlotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    SettingsModule,
    MatCardModule,
    ForestUidModule
  ],
  providers: [],
  exports: [
    RegisterForestComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
