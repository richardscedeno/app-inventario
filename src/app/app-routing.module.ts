import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: 'producto',
    loadChildren: () => import('./paginas/producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'productodetalle',
    loadChildren: () => import('./paginas/productodetalle/productodetalle.module').then( m => m.ProductodetallePageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./paginas/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'inventario',
    loadChildren: () => import('./paginas/inventario/inventario.module').then( m => m.InventarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
