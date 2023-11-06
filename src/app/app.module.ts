import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { PageModule } from './page/page.module';

import { FiltroPipe } from './pipes/filtro.pipe';
import { PipesModule } from './pipes/pipes.module';





@NgModule({
  declarations: [
    AppComponent,
  
    
  
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SharedModule,
    PageModule,
    HttpClientModule,
    PipesModule
   
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
