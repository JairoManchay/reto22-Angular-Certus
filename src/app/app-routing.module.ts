import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaGetComponent } from './components/vista-get/vista-get.component';
import { LoginComponent } from './components/login/login.component';
import { CanActivateGuard } from './can-activate.guard';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { CanDesactiveGuard } from './can-desactive.guard';

const routes: Routes = [
  {path: 'vista', component: VistaGetComponent, canActivate:[CanActivateGuard]},
  {path: '', component: LoginComponent},
  {path: 'mensaje', component: MensajeComponent, canDeactivate: [CanDesactiveGuard], canActivate:[CanActivateGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
