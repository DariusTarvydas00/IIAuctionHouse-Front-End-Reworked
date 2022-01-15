import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree/tree.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PercentageComponent } from './percentage/percentage.component';
import { PlotComponent } from './plot/plot.component';
import {MatCardModule} from "@angular/material/card";
import { PlotEditorComponent } from './plot-editor/plot-editor.component';
import {MatIconModule} from "@angular/material/icon";
import { TreeTypeCardComponent } from './tree-type-card/tree-type-card.component';
import { PlotCardComponent } from './plot-card/plot-card.component';



@NgModule({
  declarations: [
    TreeComponent,
    PercentageComponent,
    PlotComponent,
    PlotEditorComponent,
    TreeTypeCardComponent,
    PlotCardComponent,
  ],
  exports: [
    TreeTypeCardComponent,
    PlotEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class PlotModule { }
