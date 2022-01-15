import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {path: 'registerForest', loadChildren: () =>
      import('./register-forest/register-forest.module')
        .then(f => f.RegisterForestModule)},
  {path: 'forests', loadChildren: () =>
      import('./forest/forest.module')
        .then(f => f.ForestModule)},
  {path: 'settings', loadChildren: () =>
      import('./settings/settings.module')
        .then(f => f.SettingsModule)}

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
