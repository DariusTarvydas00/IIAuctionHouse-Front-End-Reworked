import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TreeEditorComponent} from "./tree-type/tree-editor/tree-editor.component";
import {PlotEditorComponent} from "./plot-editor/plot-editor.component";

const routes: Routes = [
  { path: 'tree-editor', component: TreeEditorComponent},
  { path: 'plot-editor', component: PlotEditorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlotRoutingModule { }
