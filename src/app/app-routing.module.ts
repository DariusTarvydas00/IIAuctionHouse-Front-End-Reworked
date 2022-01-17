import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import {RegisterForestComponent} from "./components/register-forest/register-forest.component";
import {RegisterPlotComponent} from "./components/register-plot/register-plot.component";

const routes: Routes = [
  {path: 'settings', loadChildren: () =>
      import('./settings/settings.module')
        .then(f => f.SettingsModule)},
  {path: 'register-forest', component: RegisterForestComponent},
  {path: 'register-plot', component: RegisterPlotComponent},

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
