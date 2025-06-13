import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPagesRoutingModule } from './main-pages-routing.module';
import {CatalogComponent} from "./catalog/catalog.component";
import {MainComponent} from "./main/main.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {NgbAccordionModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    CatalogComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgbAccordionModule,
    MainPagesRoutingModule,
  ],
  exports: [
    MainPagesRoutingModule,
  ]
})
export class MainPagesModule { }
