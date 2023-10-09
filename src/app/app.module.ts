import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { PageModule } from './page/page.module';





@NgModule({
  declarations: [
    AppComponent,
    
  
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SharedModule,
    PageModule
   
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
