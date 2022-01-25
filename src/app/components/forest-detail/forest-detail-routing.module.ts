import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ForestUidSelectionComponent} from "./forest-uid-selection/forest-uid-selection.component";

const routes: Routes = [
  {path: 'plot', loadChildren: () =>
      import('./plot/plot.module')
        .then(f => f.PlotModule)},
  {path: 'forest-uid-selection', component: ForestUidSelectionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForestDetailRoutingModule { }
