import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { SolicitudComponent } from './page/solicitud/solicitud.component';
import { UniconomicaComponent } from './page/uniconomica/uniconomica.component';
import { DomicilioComponent } from './page/domicilio/domicilio.component';



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
    path:'domicilio',
    component:DomicilioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
