import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniconomicaComponent } from './person/uniconomica/uniconomica.component';
import { SharedModule } from '../shared/shared.module';
import { SolicitudComponent } from './person/solicitud/solicitud.component';
import { EmbarcamayorComponent } from './person/embarcamayor/embarcamayor.component';
import { EmbarcamenorComponent } from './person/embarcamenor/embarcamenor.component';
import { InstalacuicolaComponent } from './person/instalacuicola/instalacuicola.component';
import { PanelComponent } from './admin/panel/panel.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { OficinasComponent } from './admin/unidadeconomica/oficinas/oficinas.component';
import { EditOficinaComponent } from './admin/unidadeconomica/edit-oficina/edit-oficina.component';
import { AgreOficinaComponent } from './admin/unidadeconomica/agre-oficina/agre-oficina.component';
import { PermisosComponent } from './admin/permisos/permisos.component';
import { AgregarPermisoComponent } from './admin/permisos/agregar-permiso/agregar-permiso.component';
import { EdituniconomicafisicaComponent } from './person/uniconomica/edituniconomicafisica/edituniconomicafisica.component';
import { EspeciesComponent } from './admin/especies/especies.component';
import { ArteFComponent } from './admin/arte-f/arte-f.component';
import { ModalSoliComponent } from './person/modal-soli/modal-soli.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UnidadconofisicasComponent } from './person/solicitud/unidadconofisicas/unidadconofisicas.component';
import { UniconomicamoralComponent } from './person/uniconomicamoral/uniconomicamoral.component';
import { SociosComponent } from './person/uniconomicamoral/socios/socios.component';
import { ProductosComponent } from './admin/productos/productos.component';





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
    ModalSoliComponent,
    UnidadconofisicasComponent,
    UniconomicamoralComponent,
    SociosComponent,
    ProductosComponent,
    
   
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    
   
  ]
,
exports: [
  SolicitudComponent ,
  UniconomicaComponent,

  
  
]
})
export class PageModule { }


