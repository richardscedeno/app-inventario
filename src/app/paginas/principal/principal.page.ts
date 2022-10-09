import { ProductoService } from './../../servicios/producto.service';
import { Component, OnInit } from '@angular/core';

//Mis importacioines
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  datosScanedos:{}
  cod:string;

  constructor(private barcodeSacanner: BarcodeScanner,
              private servProduct:ProductoService) { }

  ngOnInit() {
  }

  bandera=false;
  scannerCode(){
    this.barcodeSacanner.scan().then((respuesta)=>{
      //this.datosScanedos = respuesta;

      // alert("Codigo -> "+ respuesta.text);
      // this.servProduct.buscarProducto(respuesta.text);

      if(this.servProduct.alerta(respuesta.text)===true){
        alert(" Codigo no registrado ");
      }else{
        alert("Codigo -> "+ respuesta.text);
        this.servProduct.buscarProducto(respuesta.text);
      }    

    })
    .catch(err=>{
      console.log("Error", err);
    });
  }

  buscar(){
    console.log(this.cod);
    this.servProduct.buscarProducto(this.cod);
  }

  listar(){
    this.servProduct.listarbdProductos();

    console.log("Productos dentro del inventario");
    console.log(this.servProduct.getProductInventario());

    console.log("Productos Faltantes");
    //this.servProduct.addProductFaltantes();
    this.servProduct.compararVectores();
  }

  mostrarInventario(){

    if(this.servProduct.bdProductInventario.length === 0){
      console.log("No hay datos en el inventario");
    }else{
       console.log("Productos del inventario");
       console.log(this.servProduct.bdProductInventario);


       console.log("Productos Faltantes 2");
        this.servProduct.compararVectores();


       console.log("Productos Faltantes");
       console.log(this.servProduct.getProductFaltantes());
    }

  }
}
