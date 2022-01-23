import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForestDetailRoutingModule } from './forest-detail-routing.module';
import {ForestGroupModule} from "./forest-group/forest-group.module";
import { ForestUidSelectionComponent } from './forest-uid-selection/forest-uid-selection.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [


    ForestUidSelectionComponent
  ],
  imports: [
    CommonModule,
    ForestDetailRoutingModule,
    ForestGroupModule,
    FormsModule
  ]
})
export class ForestDetailModule { }
