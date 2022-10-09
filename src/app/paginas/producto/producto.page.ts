import { ProductoService } from './../../servicios/producto.service';
import { ProductodetallePage } from './../productodetalle/productodetalle.page';
import { Component, OnInit } from '@angular/core';
import { IonItemSliding, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  productos:any[]=[];
  ObjNuevo={}

  constructor(private modalCtrl:ModalController,
              private servProduct:ProductoService) { }

  ngOnInit() {
    this.recuperarProductos();
  }

  recuperarProductos(){
    this.productos = this.servProduct.getProductos();
  }

  async Agregar(){
    const modal=await this.modalCtrl.create({
      component: ProductodetallePage,
      componentProps:{
        productos:this.ObjNuevo,
        titulo:"Agregar"
      },
      showBackdrop:true,
      backdropDismiss:false
    });
    await modal.present();
  }

  async Editar(objProducto, ionItemSliding:IonItemSliding){
    ionItemSliding.close();
    const modal=await this.modalCtrl.create({
      component: ProductodetallePage,
      componentProps:{
        objProducto:objProducto,
        titulo:"Editar"
      },
      showBackdrop:true,
      backdropDismiss:false
    });
    await modal.present();
  }

  Eliminar(codigo){
    this.servProduct.deleteProducto(codigo);
  }
}
