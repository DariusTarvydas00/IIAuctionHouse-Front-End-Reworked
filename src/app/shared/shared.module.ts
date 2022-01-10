import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from "@angular/material/tabs";
import { HeaderComponent } from "./layout/header/header.component";
import {RouterModule} from "@angular/router";
import {FooterComponent} from "./layout/footer/footer.component";
import { ListErrorsComponent } from './list-errors/list-errors.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ListErrorsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule
  ],
  exports: [
    MatTabsModule,
    HeaderComponent,
    FooterComponent,
    ListErrorsComponent
  ]
})
export class SharedModule { }
