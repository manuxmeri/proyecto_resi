import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { SolicitudComponent } from '../solicitud/solicitud.component';



@NgModule({
  declarations: [
    LoginComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule
  ],

  exports: [
    LoginComponent
  ],
})
export class LoginModule { }
