import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlotRoutingModule } from './plot-routing.module';
import { PlotEditorComponent } from './plot-editor/plot-editor.component';
import { PlotSelectionComponent } from './plot-selection/plot-selection.component';
import { TreeTypeSelectionComponent } from './tree-type-selection/tree-type-selection.component';
import { TreeEditorComponent } from './tree-editor/tree-editor.component';


@NgModule({
  declarations: [
    PlotEditorComponent,
    PlotSelectionComponent,
    TreeTypeSelectionComponent,
    TreeEditorComponent
  ],
  imports: [
    CommonModule,
    PlotRoutingModule
  ]
})
export class PlotModule { }
