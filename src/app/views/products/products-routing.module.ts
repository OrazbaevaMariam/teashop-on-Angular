import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./product/product.component";

const routes: Routes = [
  {path: 'product', component: ProductComponent},
  {path: 'catalog/product/:id', component: ProductComponent},
  {path: 'catalog',
    children: [
      { path: 'product', component: ProductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
