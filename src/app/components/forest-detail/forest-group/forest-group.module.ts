import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForestGroupRoutingModule } from './forest-group-routing.module';
import {FormsModule} from "@angular/forms";
import {ForestGroupComponent} from "./forest-group-selection/forest-group.component";


@NgModule({
  declarations: [
    ForestGroupComponent,
  ],
  imports: [
    CommonModule,
    ForestGroupRoutingModule,
    FormsModule
  ],
  exports:[
    ForestGroupComponent,
  ]
})
export class ForestGroupModule { }
