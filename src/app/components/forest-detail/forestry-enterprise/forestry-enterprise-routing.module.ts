import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ForestryEnterpriseSelectionComponent
} from "./forestry-enterprise-selection/forestry-enterprise-selection.component";
import {ForestryEnterpriseEditorComponent} from "./forestry-enterprise-editor/forestry-enterprise-editor.component";

const routes: Routes = [
  {path: 'forestryEnterprise-selection', component: ForestryEnterpriseSelectionComponent},
  {path: 'forestryEnterprise-editor', component: ForestryEnterpriseEditorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForestryEnterpriseRoutingModule { }
