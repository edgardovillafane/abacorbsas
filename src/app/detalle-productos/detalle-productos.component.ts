import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent implements OnInit {
  
  detail_prod: Array<object>;
  prodId:number;
  prodSelected:object;

  constructor(private ruta:ActivatedRoute) {
    this.detail_prod = [
      {id:1 ,detalle:'Apropiado para paredes interiores rugosas',imagen:"/assets/img/impermeable.png" },
      {id:2 ,detalle:'Excelente para decorar',imagen:"/assets/img/premium.png"},
      {id:3 ,detalle:'Ideal para espacios reducidos',imagen:"/assets/img/membranacement.png"},
      {id:4 ,detalle:'Apto para habitaciones donde haya niños',imagen:"/assets/img/multifunc.png"},
      {id:5 ,detalle:'Perfecta textura y buen mantenimiento',imagen:"/assets/img/yeso.png"},
      {id:6 ,detalle:'Alta durabilidad',imagen:"/assets/img/stukor.png"},
      {id:7 ,detalle:'Perfecta textura y buen mantenimiento',imagen:"/assets/img/pastina.png"},
      {id:8 ,detalle:'Alta durabilidad',imagen:"/assets/img/mortero.png"}
    ]
   }
 

  ngOnInit() {
    this.ruta.params.subscribe(params=>{
      this.prodId = params['prodId'];
      this.prodSelected = this.findRevest();
    })
    
  }
  filtroPorId(producto){
    return producto.id == this;
  }

  findRevest(){
    return this.detail_prod.filter(this.filtroPorId,this.prodId)[0];
  }
  

}