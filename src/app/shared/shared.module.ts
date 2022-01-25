import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from "@angular/material/tabs";
import { HeaderComponent } from './layout/header/header.component';
import {ComponentsModule} from "../components/components.module";
import {RouterModule} from "@angular/router";
import {ForestModule} from "../components/forest/forest.module";



@NgModule({
  declarations: [

    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    ComponentsModule,
    RouterModule,
    ForestModule,
  ],
  exports: [
    MatTabsModule,
    HeaderComponent,
  ]
})
export class SharedModule { }
