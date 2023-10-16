import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './admin/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { LoginuserComponent } from './user/loginuser/loginuser.component';




@NgModule({
  declarations: [
    LoginComponent,
    LoginuserComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule
  ],

  exports: [
    LoginComponent,
    LoginuserComponent
  ],
})
export class LoginModule { }
