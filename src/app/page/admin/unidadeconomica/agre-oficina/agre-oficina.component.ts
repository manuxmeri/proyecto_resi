import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-agre-oficina',
  templateUrl: './agre-oficina.component.html',
  styleUrls: ['./agre-oficina.component.css']
})
export class AgreOficinaComponent implements OnInit {
  data:  any[]=[];
  FormUni:FormGroup;

  constructor( private  api:ApiService,private router:Router, public formulario:FormBuilder) { 
    this.FormUni=this.formulario.group({
      NombreOficina: [''],
      Ubicacion: [''],
      Telefono: [''],
      Email: ['']
      });
  }

  ngOnInit(): void {
    
      
  }

  enviar(): any{
    //console.log(this.FormUni.value);
    this.api.agreOfi(this.FormUni.value).subscribe();
    this.router.navigateByUrl('oficinas');
    location.reload();

    }

    

    
      
}
