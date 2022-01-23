import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ForestSelectionComponent} from "./forest-selection/forest-selection.component";
import {ForestEditorComponent} from "./forest-editor/forest-editor.component";

const routes: Routes = [
  {path: 'forest-selection', component: ForestSelectionComponent},
  {path: 'forest-editor', component: ForestEditorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForestRoutingModule { }
