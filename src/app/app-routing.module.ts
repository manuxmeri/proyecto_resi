import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/admin/login/login.component';
import { SolicitudComponent } from './page/admin/solicitud/solicitud.component';
import { UniconomicaComponent } from './page/admin/uniconomica/uniconomica.component';
import { LoginuserComponent } from './login/user/loginuser/loginuser.component';



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
  }
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
