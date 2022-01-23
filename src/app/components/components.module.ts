import { NgModule } from '@angular/core';

import {ForestModule} from "./forest/forest.module";
import {RegisterPlotComponent} from "./register-plot/register-plot.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {ComponentsRoutingModule} from "./components-routing.module";


@NgModule({
  declarations: [
    RegisterPlotComponent,
  ],
  imports: [
    ForestModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  exports:[
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
