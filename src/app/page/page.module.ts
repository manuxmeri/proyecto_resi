import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniconomicaComponent } from './admin/uniconomica/uniconomica.component';
import { SharedModule } from '../shared/shared.module';
import { SolicitudComponent } from './admin/solicitud/solicitud.component';
import { EmbarcamayorComponent } from './admin/embarcamayor/embarcamayor.component';
import { EmbarcamenorComponent } from './admin/embarcamenor/embarcamenor.component';
import { InstalacuicolaComponent } from './admin/instalacuicola/instalacuicola.component';





@NgModule({
  declarations: [
    SolicitudComponent ,
    UniconomicaComponent,
    EmbarcamayorComponent,
    EmbarcamenorComponent,
    InstalacuicolaComponent,
   
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


