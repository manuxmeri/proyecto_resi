import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { SolicitudModule } from './solicitud/solicitud.module';

@NgModule({
  declarations: [
    AppComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SolicitudModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
