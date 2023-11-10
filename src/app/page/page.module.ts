import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniconomicaComponent } from './person/uniconomica/uniconomica.component';
import { SharedModule } from '../shared/shared.module';
import { SolicitudComponent } from './person/solicitud/solicitud.component';
import { EmbarcamayorComponent } from './person/embarcamayor/embarcamayor.component';
import { EmbarcamenorComponent } from './person/embarcamenor/embarcamenor.component';
import { InstalacuicolaComponent } from './person/instalacuicola/instalacuicola.component';
import { PanelComponent } from './admin/panel/panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OficinasComponent } from './admin/unidadeconomica/oficinas/oficinas.component';
import { EditOficinaComponent } from './admin/unidadeconomica/edit-oficina/edit-oficina.component';





@NgModule({
  declarations: [
    SolicitudComponent ,
    UniconomicaComponent,
    EmbarcamayorComponent,
    EmbarcamenorComponent,
    InstalacuicolaComponent,
    PanelComponent,
    OficinasComponent,
    EditOficinaComponent,
   
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
   
  ]
,
exports: [
  SolicitudComponent ,
  UniconomicaComponent,
  
]
})
export class PageModule { }


