import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductodetallePageRoutingModule } from './productodetalle-routing.module';

import { ProductodetallePage } from './productodetalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductodetallePageRoutingModule
  ],
  declarations: [ProductodetallePage]
})
export class ProductodetallePageModule {}
