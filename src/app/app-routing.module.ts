import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import {RegisterForestComponent} from "./settings/register-forest/register-forest.component";
import {ForestListComponent} from "./settings/forest-list/forest-list.component";
import {RegisterPlotComponent} from "./settings/register-plot/register-plot.component";

const routes: Routes = [
  {path: 'settings', loadChildren: () =>
      import('./settings/settings.module')
        .then(f => f.SettingsModule)},
  {path: 'register-forest', component: RegisterForestComponent},
  {path: 'register-plot', component: RegisterPlotComponent},
  {path: 'forest-list', component: ForestListComponent},

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
