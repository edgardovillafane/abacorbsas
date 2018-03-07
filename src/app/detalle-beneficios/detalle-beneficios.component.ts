import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalle-beneficios.component.html',
  styleUrls: ['./detalle-beneficios.component.css']
})
export class DetalleBeneficiosComponent implements OnInit {
  
  detail_benef: Array<object>;
  benefId:number;
  benefSelected:object;

  constructor(private ruta:ActivatedRoute) {
    this.detail_benef = [
      {id:1 ,nombre: 'Arquitectos',detalle:'Adhesivo impermeable multiuso ideal para Cerámica convencional piezas pre-moldeadas de hormigón hormigón celular baldosas adoquines cementicios ',imagen:"/assets/img/impermeable.png",imagenDet:"/assets/img/det-prod/impermeable.jpg" },
      {id:2 ,nombre: 'Ccomercios',detalle:'Mezcla adhesiva premium ideal para:granito natural, compactos, porcelanato y cerámica convencional.',imagen:"/assets/img/premium.png",imagenDet:"/assets/img/det-prod/premium.jpg"},
      {id:3 ,nombre: 'Instaladores',detalle:'Membrana cementicia flexible ideal para: Hormigón, mamposterías, lozas de concreto, terrazas, estacionamientos  y sótanos.',imagen:"/assets/img/membranacement.png",imagenDet:"/assets/img/det-prod/cementicia.jpg"},
      {id:4 ,nombre: 'Distribuidores',detalle:'Material bi-funcional de secado rápido  para ser utilizado en obra con solo  agregar agua, puede ser utilizado como pasta de agarre o masilla para tratamiento de juntas. Masilla para placas de yeso tipo Durloc Masilla para pared y placas tipo Knauf',imagen:"/assets/img/multifunc.png"}
    ]
   }
 

  ngOnInit() {
    this.ruta.params.subscribe(params=>{
      this.benefId = params['benefId'];
      this.benefSelected = this.findRevest();
    })
    
  }
  filtroPorId(beneficio){
    return beneficio.id == this;
  }

  findRevest(){
    return this.detail_benef.filter(this.filtroPorId,this.benefId)[0];
  }
  

}
