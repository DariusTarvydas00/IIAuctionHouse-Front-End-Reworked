import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeTypeRoutingModule } from './tree-type-routing.module';
import { TreeTypeSelectionComponent } from './tree-type-selection/tree-type-selection.component';
import { TreeEditorComponent } from './tree-editor/tree-editor.component';


@NgModule({
  declarations: [
    TreeTypeSelectionComponent,
    TreeEditorComponent
  ],
  imports: [
    CommonModule,
    TreeTypeRoutingModule
  ]
})
export class TreeTypeModule { }
