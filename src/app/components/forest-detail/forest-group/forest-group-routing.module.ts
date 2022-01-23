import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ForestGroupComponent} from "./forest-group-selection/forest-group.component";

const routes: Routes = [
  {path: 'forestGroup-selection', component: ForestGroupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForestGroupRoutingModule { }
