import { Component, OnInit } from '@angular/core';
import {Beneficios} from '../beneficios-class';
import {BENEFICIOS} from '../mock-beneficios';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.css']
})
export class BeneficiosComponent implements OnInit {

  beneficios = BENEFICIOS; //aquí asignamos a la variable 'products'el mock externo llamado 'PRODUCTOS'
  selectedBenefic: Beneficios; //Productos -> nombre de la clase

  constructor() { }

  ngOnInit() {
  }

  onSelect(benef: Beneficios): void {
   // alert('hola' + prod.id );
    this.selectedBenefic = benef;
   }

}
