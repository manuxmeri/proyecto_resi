import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniconomicaComponent } from './uniconomica/uniconomica.component';
import { SharedModule } from '../shared/shared.module';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { DomicilioComponent } from './domicilio/domicilio.component';




@NgModule({
  declarations: [
    SolicitudComponent ,
    UniconomicaComponent,
    DomicilioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
   
  ]
,
exports: [
  SolicitudComponent ,
  UniconomicaComponent,
  DomicilioComponent
]
})
export class PageModule { }


