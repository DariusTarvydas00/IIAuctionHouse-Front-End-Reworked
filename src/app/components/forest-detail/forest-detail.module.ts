import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForestDetailRoutingModule } from './forest-detail-routing.module';
import { ForestUidSelectionComponent } from './forest-uid-selection/forest-uid-selection.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {
  ForestryEnterpriseEditorComponent
} from "./forestry-enterprise/forestry-enterprise-editor/forestry-enterprise-editor.component";
import {
  ForestryEnterpriseSelectionComponent
} from "./forestry-enterprise/forestry-enterprise-selection/forestry-enterprise-selection.component";
import {PlotModule} from "./plot/plot.module";


@NgModule({
  declarations: [
    ForestUidSelectionComponent,
    ForestryEnterpriseEditorComponent,
    ForestryEnterpriseSelectionComponent
  ],
  imports: [
    CommonModule,
    ForestDetailRoutingModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    PlotModule
  ],
  exports: [
    ForestDetailRoutingModule,
    ForestUidSelectionComponent,
    ForestryEnterpriseEditorComponent,
    ForestryEnterpriseSelectionComponent
  ]
})
export class ForestDetailModule { }
