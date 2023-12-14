import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SolicitudComponent } from './page/person/solicitud/solicitud.component';
import { UniconomicaComponent } from './page/person/uniconomica/uniconomica.component';
import { LoginuserComponent } from './login/user/loginuser/loginuser.component';
import { LoginComponent } from './login/admin/login/login.component';
import { EmbarcamayorComponent } from './page/person/embarcamayor/embarcamayor.component';
import { MenuComponent } from './shared/menu/menu.component';
import { EmbarcamenorComponent } from './page/person/embarcamenor/embarcamenor.component';
import { InstalacuicolaComponent } from './page/person/instalacuicola/instalacuicola.component';
import { PanelComponent } from './page/admin/panel/panel.component';
import { OficinasComponent } from './page/admin/unidadeconomica/oficinas/oficinas.component';
import { EditOficinaComponent } from './page/admin/unidadeconomica/edit-oficina/edit-oficina.component';
import { AgreOficinaComponent } from './page/admin/unidadeconomica/agre-oficina/agre-oficina.component';
import { PermisosComponent } from './page/admin/permisos/permisos.component';
import { AgregarPermisoComponent } from './page/admin/permisos/agregar-permiso/agregar-permiso.component';
import { EdituniconomicafisicaComponent } from './page/person/uniconomica/edituniconomicafisica/edituniconomicafisica.component';
import { EspeciesComponent } from './page/admin/especies/especies.component';
import { ArteFComponent } from './page/admin/arte-f/arte-f.component';
import { UnidadconofisicasComponent } from './page/person/solicitud/unidadconofisicas/unidadconofisicas.component';
import { UniconomicamoralComponent } from './page/person/uniconomicamoral/uniconomicamoral.component';
import { SociosComponent } from './page/person/uniconomicamoral/socios/socios.component';
import { ProductosComponent } from './page/admin/productos/productos.component';
import { RegionesComponent } from './page/admin/regiones/regiones.component';
import { DistritosComponent } from './page/admin/distritos/distritos.component';
import { MunicipiosComponent } from './page/admin/municipios/municipios.component';
import { LocalidadesComponent } from './page/admin/localidades/localidades.component';


LoginComponent
const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'solicitud',
    component:SolicitudComponent
  },
  {
    path:'uniconomica',
    component:UniconomicaComponent
  },
  {
    path:'loginuser',
    component:LoginuserComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'embarcamayor',
    component:EmbarcamayorComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'embarcamenor',
    component:EmbarcamenorComponent
  },
  {
    path:'instalacuicola',
    component:InstalacuicolaComponent
  },

  {
    path:'panel',
    component:PanelComponent
  },
  {
    path:'oficinas',
    component:OficinasComponent
  },
  {
    path:'edit-oficina/:id',
    component:EditOficinaComponent
  },
  {
    path:'agregar-oficina',
    component:AgreOficinaComponent
  },

  {
    path:'permisos',
    component:PermisosComponent
  },
  {
    path:'agregar-permiso',
    component:AgregarPermisoComponent
  },
  {
    path:'editar-unidadconomicafi/:id',
    component:EdituniconomicafisicaComponent
  },
  {
    path:'especies',
    component:EspeciesComponent
  },
  {
    path:'artefisica',
    component:ArteFComponent
  },

  {
    path:'unifisicas/:id',
    component:UnidadconofisicasComponent
  },
  
  {
    path:'unifisicas/:id',
    component:UniconomicamoralComponent
  },
  {
    path:'unimoral',
    component:UniconomicamoralComponent
  },
  {
    path:'socios/:id',
    component:SociosComponent
  },
  {
    path:'productos',
    component:ProductosComponent
  },
  {
    path:'regiones',
    component:RegionesComponent
  },
  {
    path:'distritos',
    component:DistritosComponent
  },
  {
    path:'municipios',
    component:MunicipiosComponent
  },

  {
    path:'localidades',
    component:LocalidadesComponent
  },




  
  
  
  
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
