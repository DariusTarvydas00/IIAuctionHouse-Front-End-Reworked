import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Routing
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

//http
import { HttpClientModule} from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SettingsModule} from "./settings/settings.module";
import {MatCardModule} from "@angular/material/card";
import {RegisterForestComponent} from "./settings/register-forest/register-forest.component";
import {ForestListComponent} from "./settings/forest-list/forest-list.component";
import {RegisterPlotComponent} from "./settings/register-plot/register-plot.component";
import {
  ForestryEnterpriseSelectionComponent
} from "./selective-options/forestDetailsSelections/forestry-enterprise-selection/forestry-enterprise-selection.component";


@NgModule({
  declarations: [
    AppComponent,
    RegisterForestComponent,
    RegisterPlotComponent,
    ForestListComponent,
    ForestryEnterpriseSelectionComponent,
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
    FormsModule
  ],
  providers: [],
  exports: [
    RegisterForestComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
