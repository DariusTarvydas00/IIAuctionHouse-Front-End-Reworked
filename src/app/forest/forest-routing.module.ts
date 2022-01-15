import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TreeComponent} from "./plot/tree/tree.component";
import {PercentageComponent} from "./plot/percentage/percentage.component";
import {PlotComponent} from "./plot/plot/plot.component";
import {PlotEditorComponent} from "./plot/plot-editor/plot-editor.component";
import {ForestComponent} from "./forest/forest.component";
import {ForestEditorComponent} from "./forest-editor/forest-editor.component";
import {ForestListComponent} from "./forest-list/forest-list.component";

const routes: Routes = [
  // {path: 'percentages', loadChildren: () =>
  //     import('./forest-details/percentage/percentage.module')
  //       .then(f => f.PercentageModule)},
  // {path: 'treeTypes', component: TreeTypesComponent},

  {path: 'plot', loadChildren: () =>
      import('./plot/plot.module')
        .then(f => f.PlotModule)},
  {path: 'trees', component: TreeComponent},
  {path: 'percentages', component: PercentageComponent},
  {path: 'plots', component: PlotComponent},
  {path: 'plot-editor', component: PlotEditorComponent},
  {path: 'forest-editor', component: ForestEditorComponent},
  {path: 'forest-list', component: ForestListComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForestRoutingModule { }
