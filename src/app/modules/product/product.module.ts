import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MatButtonModule } from '@angular/material/button';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductAlertsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatButtonModule
  ]
})
export class ProductModule { }
