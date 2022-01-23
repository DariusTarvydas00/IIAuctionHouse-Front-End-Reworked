import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterPlotComponent} from "./register-plot/register-plot.component";

const routes: Routes = [
  {path: 'forest', loadChildren: () =>
      import('./forest/forest.module')
        .then(f => f.ForestModule)},
  {path: 'forest-details', loadChildren: () =>
      import('./forest-detail/forest-detail.module')
        .then(f => f.ForestDetailModule)},
  { path: 'reg', component: RegisterPlotComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
