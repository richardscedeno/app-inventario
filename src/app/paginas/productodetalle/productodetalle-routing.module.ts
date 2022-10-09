import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductodetallePage } from './productodetalle.page';

const routes: Routes = [
  {
    path: '',
    component: ProductodetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductodetallePageRoutingModule {}
