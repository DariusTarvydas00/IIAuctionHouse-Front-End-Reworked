import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree/tree.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PercentageComponent } from './percentage/percentage.component';
import { PlotComponent } from './plot/plot.component';
import {MatCardModule} from "@angular/material/card";
import { PlotEditorComponent } from './plot-editor/plot-editor.component';



@NgModule({
  declarations: [
    TreeComponent,
    PercentageComponent,
    PlotComponent,
    PlotEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
  ]
})
export class PlotModule { }
