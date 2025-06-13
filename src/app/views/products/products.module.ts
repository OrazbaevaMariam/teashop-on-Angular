import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {ProductComponent} from "./product/product.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ProductsRoutingModule,
  ],
  exports: [
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
