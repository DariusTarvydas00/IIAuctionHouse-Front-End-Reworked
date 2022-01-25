import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlotRoutingModule } from './plot-routing.module';
import { PlotEditorComponent } from './plot-editor/plot-editor.component';
import { PlotSelectionComponent } from './plot-selection/plot-selection.component';
import {TreeSelectionComponent} from "./tree-type/tree-selection/tree-selection.component";
import {PercentageSelectionComponent} from "./tree-type/percentage-selection/percentage-selection.component";
import {TreeEditorComponent} from "./tree-type/tree-editor/tree-editor.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    PlotEditorComponent,
    PlotSelectionComponent,
    TreeSelectionComponent,
    PercentageSelectionComponent,
    TreeEditorComponent
  ],
  imports: [
    CommonModule,
    PlotRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatTableModule
  ],
  exports:[
    PlotSelectionComponent,
    TreeSelectionComponent,
    TreeEditorComponent,
    PlotEditorComponent
  ]
})
export class PlotModule { }
