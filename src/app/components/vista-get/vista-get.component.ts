import { Component } from '@angular/core';
import { AllServiceService } from 'src/app/services/all-service.service';

@Component({
  selector: 'app-vista-get',
  templateUrl: './vista-get.component.html',
  styleUrls: ['./vista-get.component.css']
})
export class VistaGetComponent {

  constructor(private getAll: AllServiceService){}

  listado  = new Array();
  listadoArr = new Array();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAll.getAllUser().subscribe({
      next:(allUser: string)=>{
        this.listado.push(allUser);
        this.listadoArr = [...this.listado[0]]
      },
      error:(er)=>{console.error(er)},
      complete:()=>console.info("se registraron los datos")
    })
  }

}
