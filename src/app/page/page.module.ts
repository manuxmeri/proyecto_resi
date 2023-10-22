import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniconomicaComponent } from './admin/uniconomica/uniconomica.component';
import { SharedModule } from '../shared/shared.module';
import { SolicitudComponent } from './admin/solicitud/solicitud.component';
import { EmbarcamayorComponent } from './admin/embarcamayor/embarcamayor.component';





@NgModule({
  declarations: [
    SolicitudComponent ,
    UniconomicaComponent,
    EmbarcamayorComponent,
   
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


