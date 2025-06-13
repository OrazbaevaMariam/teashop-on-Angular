import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {ProductComponent} from "../products/product/product.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'catalog/product/:id', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPagesRoutingModule { }
