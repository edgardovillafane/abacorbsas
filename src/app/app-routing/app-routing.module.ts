import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { DetalleProductosComponent } from '../detalle-productos/detalle-productos.component';
import { BeneficiosComponent } from '../beneficios/beneficios.component';
import { DetalleBeneficiosComponent } from '../detalle-beneficios/detalle-beneficios.component';
import { ComoLlegarComponent } from '../como-llegar/como-llegar.component';
import { ContactoComponent } from '../contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detalle-productos/:prodId', component: DetalleProductosComponent },
  { path: 'beneficios', component: BeneficiosComponent },
  { path: 'detalle-beneficios/:benefId', component: DetalleBeneficiosComponent },
  { path: 'como-llegar', component: ComoLlegarComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
],
  declarations: []
})
export class AppRoutingModule { }
