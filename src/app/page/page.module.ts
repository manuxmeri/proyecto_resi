import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniconomicaComponent } from './admin/uniconomica/uniconomica.component';
import { SharedModule } from '../shared/shared.module';
import { SolicitudComponent } from './admin/solicitud/solicitud.component';





@NgModule({
  declarations: [
    SolicitudComponent ,
    UniconomicaComponent,
   
  ],
  imports: [
    CommonModule,
    SharedModule,
   
  ]
,
exports: [
  SolicitudComponent ,
  UniconomicaComponent,
  
]
})
export class PageModule { }


