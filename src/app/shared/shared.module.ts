import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
     RouterModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ]
})
export class SharedModule {
}
