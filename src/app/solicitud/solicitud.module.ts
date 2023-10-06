import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudComponent } from './solicitud.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SolicitudComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SolicitudComponent
  ],
})
export class SolicitudModule { }
