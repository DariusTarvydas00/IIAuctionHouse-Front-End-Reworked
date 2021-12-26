import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ForestLocationComponent} from "../forest/forest-location/forest-location.component";

const routes: Routes = [
  {path: '', component: ForestLocationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
