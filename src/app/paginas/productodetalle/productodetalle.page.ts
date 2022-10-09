import { ProductoService } from './../../servicios/producto.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productodetalle',
  templateUrl: './productodetalle.page.html',
  styleUrls: ['./productodetalle.page.scss'],
})
export class ProductodetallePage implements OnInit {

  objProducto:any[]=[];
  titulo:string;

  constructor(private modalCtrl:ModalController,
              private servProduct:ProductoService) { }

  ngOnInit() {
  }

  cerrar(){
    this.modalCtrl.dismiss();
  }

  guardar(){
    if(this.titulo==='Agregar'){
      console.log("Nuevo Producto");
      this.servProduct.addProducto(this.objProducto);
      this.servProduct.mensaje("Se añadió con éxito", "success");
      console.log(this.objProducto);
      this.cerrar();
    }else{
      console.log("Editar Producto");
      this.servProduct.editProducto(this.objProducto);
      this.servProduct.mensaje("Se editó con éxito", "success");
      this.cerrar();
    }
  }

}
