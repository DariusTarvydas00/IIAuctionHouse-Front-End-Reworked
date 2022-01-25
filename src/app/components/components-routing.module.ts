import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ForestryEnterpriseEditorComponent} from "./forest-detail/forestry-enterprise/forestry-enterprise-editor/forestry-enterprise-editor.component";
import {TreeEditorComponent} from "./forest-detail/plot/tree-type/tree-editor/tree-editor.component";

const routes: Routes = [
  {path: 'forest', loadChildren: () =>
      import('./forest/forest.module')
        .then(f => f.ForestModule)},
  // {path: 'forest-details', loadChildren: () =>
  //     import('./forest-detail/forest-detail.module')
  //       .then(f => f.ForestDetailModule)},
  { path: 'tree-editor', component: TreeEditorComponent },
  { path: 'fe-editor', component: ForestryEnterpriseEditorComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
