import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private  authentication: AutenticacionService, private route: Router){}


  redireccion='';

  name: string = '';
  password='';

  userDate = 'JAIRO';
  pass = '123456';

  login(){
    if(this.name==this.userDate && this.password==this.pass){
      console.log("usuario correcto");
      this.authentication.login();
      this.redireccion = this.authentication.urlUSuarioIntentandoAcceder;
      this.authentication.urlUSuarioIntentandoAcceder = '';
      this.route.navigate([this.redireccion]);
    }else{
      console.log("Coloque bien su usuario");
      return;
    }
  }


}
