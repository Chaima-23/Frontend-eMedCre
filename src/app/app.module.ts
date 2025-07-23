import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes'; 
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
@NgModule({


  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    HeaderComponent,
    NavbarComponent,
    
    
  ],
  providers: [],
  

})
export class AppModule { }
