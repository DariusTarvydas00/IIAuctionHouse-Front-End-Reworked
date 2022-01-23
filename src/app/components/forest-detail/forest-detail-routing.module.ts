import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'forest-group', loadChildren: () =>
      import('./forest-group/forest-group.module')
        .then(f => f.ForestGroupModule)},
  // {path: 'forestGroup-selection', component: ForestGroupSelectionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForestDetailRoutingModule { }
