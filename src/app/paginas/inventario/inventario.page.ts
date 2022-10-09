import { ProductoService } from './../../servicios/producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
})
export class InventarioPage implements OnInit {

  Inventario:any[]=this.servProduct.bdProductInventario;

  //Almacena los productos faltantes
  Faltantes:any[]=this.servProduct.bdProductFaltantes;


  constructor(private servProduct:ProductoService) { }

  ngOnInit() {
  }
}
