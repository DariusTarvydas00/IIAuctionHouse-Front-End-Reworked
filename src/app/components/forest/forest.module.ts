import { NgModule } from '@angular/core';

import { ForestRoutingModule } from './forest-routing.module';
import { ForestSelectionComponent } from './forest-selection/forest-selection.component';
import { ForestEditorComponent } from './forest-editor/forest-editor.component';
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ForestDetailModule} from "../forest-detail/forest-detail.module";
import {ForestGroupComponent} from "../forest-detail/forest-group/forest-group-selection/forest-group.component";


@NgModule({
  declarations: [
    ForestSelectionComponent,
    ForestEditorComponent,
    ForestGroupComponent
  ],
  exports: [
    ForestSelectionComponent,
    ForestRoutingModule
  ],
  imports: [
    ForestDetailModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class ForestModule { }
