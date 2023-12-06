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
import { AgreOficinaComponent } from './admin/unidadeconomica/agre-oficina/agre-oficina.component';
import { PermisosComponent } from './admin/permisos/permisos.component';
import { AgregarPermisoComponent } from './admin/permisos/agregar-permiso/agregar-permiso.component';
import { EdituniconomicafisicaComponent } from './person/uniconomica/edituniconomicafisica/edituniconomicafisica.component';
import { EspeciesComponent } from './admin/especies/especies.component';
import { ArteFComponent } from './admin/arte-f/arte-f.component';





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
    AgreOficinaComponent,
    PermisosComponent,
    AgregarPermisoComponent,
    EdituniconomicafisicaComponent,
    EspeciesComponent,
    ArteFComponent,
   
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


