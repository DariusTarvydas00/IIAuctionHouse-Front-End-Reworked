import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForestRoutingModule } from "./forest-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatListModule} from "@angular/material/list";
import {PlotModule} from "./plot/plot.module";
import { ForestComponent } from './forest/forest.component';
import { ForestEditorComponent } from './forest-editor/forest-editor.component';
import { ForestCardComponent } from './forest-card/forest-card.component';
import {MatCardModule} from "@angular/material/card";
import { ForestListComponent } from './forest-list/forest-list.component';

@NgModule({
  declarations: [

    ForestComponent,
       ForestEditorComponent,
       ForestCardComponent,
       ForestListComponent
  ],
    imports: [
        CommonModule,
        ForestRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        FormsModule,
        MatListModule,
        PlotModule,
        MatCardModule
    ]
})
export class ForestModule { }
