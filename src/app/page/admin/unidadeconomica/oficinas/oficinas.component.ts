import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-oficinas',
  templateUrl: './oficinas.component.html',
  styleUrls: ['./oficinas.component.css']
})
export class OficinasComponent implements OnInit {

  
  data:  any[]=[];
  FormUni:FormGroup;
  
  constructor(private  api:ApiService ,private router:Router, public formulario:FormBuilder){
    this.FormUni=this.formulario.group({
      NombreOficina: [''],
      Ubicacion: [''],
      Telefono: [''],
      Email: ['']
      });
  }

  ngOnInit(): void {
  
    this.oficin();
  } 
  oficin(){
    this.api.getOfi().subscribe((response: any ) => { 
      this.data = response.data;
    console.log(response);
    })
  }
  
  uni(){
    this.api.getUni().subscribe((response: any) => { 
      this.data = response.data;
    //  console.log(response);
    })
  }

  enviar(): any{
    console.log(this.FormUni.value);
   
    this.api.agreOfi(this.FormUni.value).subscribe();
    this.router.navigateByUrl('panel')

    }

    editar(id = []){
      this.router.navigate(['edit-oficina', id]);
      }

      borrar(id:any, iControl:any){
        console.log(id);
        console.log(iControl);
        this.api.eliminar(id).subscribe(dato =>{
          this.data.splice(iControl, 1);
      
        });
    
      }

}
