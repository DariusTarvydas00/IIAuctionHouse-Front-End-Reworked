import { NgModule } from '@angular/core';

import { ForestRoutingModule } from './forest-routing.module';
import { ForestSelectionComponent } from './forest-selection/forest-selection.component';
import { ForestEditorComponent } from './forest-editor/forest-editor.component';
import {ForestGroupModule} from "../forest-detail/forest-group/forest-group.module";
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ForestryEnterpriseModule} from "../forest-detail/forestry-enterprise/forestry-enterprise.module";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    ForestSelectionComponent,
    ForestEditorComponent
  ],
  exports: [
    ForestSelectionComponent,
    ForestRoutingModule
  ],
  imports: [
    ForestGroupModule,
    MatCardModule,
    ReactiveFormsModule,
    ForestryEnterpriseModule,
    FormsModule,
    CommonModule
  ]
})
export class ForestModule { }
