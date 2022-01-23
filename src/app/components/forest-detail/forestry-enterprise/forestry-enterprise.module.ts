import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForestryEnterpriseRoutingModule } from './forestry-enterprise-routing.module';
import { ForestryEnterpriseSelectionComponent } from './forestry-enterprise-selection/forestry-enterprise-selection.component';
import { ForestryEnterpriseEditorComponent } from './forestry-enterprise-editor/forestry-enterprise-editor.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ForestryEnterpriseSelectionComponent,
    ForestryEnterpriseEditorComponent
  ],
  imports: [
    CommonModule,
    ForestryEnterpriseRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ForestryEnterpriseSelectionComponent,
    ForestryEnterpriseEditorComponent
  ]
})
export class ForestryEnterpriseModule { }
