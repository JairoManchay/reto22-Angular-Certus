import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { VistaGetComponent } from './vista-get/vista-get.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { MensajeComponent } from './mensaje/mensaje.component';



@NgModule({
  declarations: [
    LoginComponent,
    MenuComponent,
    VistaGetComponent,
    MensajeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    MenuComponent,
    VistaGetComponent
  ]
})
export class ComponentsModule { }
