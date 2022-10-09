import { Injectable } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  //Almacena todos los productos
  bdProductos:any[]=[];

  //Almacena los productos del inventario
  bdProductInventario:any[]=[];

  //Almacena los productos faltantes
  bdProductFaltantes:any[]=[];

  constructor(private toast:ToastController) { }

  addProducto(newProducto:any){
    this.bdProductos.push(newProducto);
  }

  getProductos(){
    return this.bdProductos;
  }

  async mensaje(texto:string, micolor:string="succes"){
    let t=await this.toast.create({
      message:texto,
      color:micolor,
      duration:2000
    });
    t.present();
  }

  editProducto(producto: any){
    // Modificar un vector en javascrip investigar
    for (let i = 0; i < this.bdProductos.length; i++) {
      if(this.bdProductos[i].codigo === producto.codigo){
        console.log("Posicion editada: ", i);
        console.log("Nuevos datos ",this.bdProductos[i]);

        this.bdProductos.splice(i,1, {
          codigo:producto.codigo , nombre:producto.nombre , descripcion:producto.descripcion , precio:producto.precio
        });
        // break;
      }
    }
  }

  deleteProducto(codigo:any){
    for(let i = 0; i<this.bdProductos.length; i++){
      if(this.bdProductos[i].codigo === codigo){
        console.log("Posicion eliminada: ", i);
        console.log("Datos elilminados: ",this.bdProductos[i]);

        this.bdProductos.splice(i,1);
      }
    }
  }

  buscarProducto(codigo){
    for(let i = 0; i<this.bdProductos.length; i++){
      if(this.bdProductos[i].codigo === codigo){
        console.log("Posicion producto: ", i);
        console.log("Datos producto: ",this.bdProductos[i]);

        //Si encuantra un producto, almacena al inventario
        this.addProductInventario(this.bdProductos[i]);
        //this.bdProductFaltantes.splice(i,1);
      }
    }
  }

  listarbdProductos(){
    console.log("Listar desde service");
    for (let index = 0; index < this.bdProductos.length; index++) {
      console.log(this.bdProductos[index]);   
    }
  }

  addProductInventario(newProducto:any){
    this.bdProductInventario.push(newProducto);
  }

  getProductInventario(){
    return this.bdProductInventario;
  }

  getProductFaltantes(){
    return this.bdProductFaltantes;
  }
  
  bandera = false;

  compararVectores(){
    for(let i = 0; i<this.bdProductos.length; i++){
      
      for(let j = 0; j<this.bdProductInventario.length; j++){
        if(this.bdProductos[i].codigo === this.bdProductInventario[j].codigo){
          this.bandera = true;
          break;
        }else{
          this.bandera = false;
        }
      }

      if(this.bandera === false){
        let band = false; 

        for(let f= 0; f<this.bdProductFaltantes.length; f++){
          if(this.bdProductFaltantes[f].codigo === this.bdProductos[i].codigo){
            //this.bdProductFaltantes.splice(f,1);
            band = true;
            break;
          }else{
            band = false;
          }
        }

        if(band === false){
          this.bdProductFaltantes.push(this.bdProductos[i]);
          console.log(this.bdProductos[i]);
        }
      }
      this.bandera = false;    
    }
  }


  alerta(codigo){

    let band=false;

    for(let j = 0; j<this.bdProductos.length; j++){

      if(this.bdProductos[j].codigo != codigo){
        //console.log("true");
        band = true;
      }else{
        band = false;
        break;
      }
    }

    return band;

  }

}

