import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Distritos } from 'src/app/interfaces/distritos';
import { Municipios } from 'src/app/interfaces/municipios';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.css']
})
export class MunicipiosComponent implements OnInit {
  FormMunicipio:FormGroup;
  data:  any[]=[];
  datos:  Municipios[]=[];
  distrito: Distritos[]=[];
  constructor(private snackBar: MatSnackBar, private api:ApiService,private router:Router, public formulario:FormBuilder){ 
  this.FormMunicipio=this.formulario.group({
    NombreMunicipio: ['',Validators.required],
    Disid: ['',Validators.required],
    Regid: ['',Validators.required],
     });
     console.log(this.FormMunicipio);
}
  
  ngOnInit(): void {
  
   this.municipios();
   this.region();
   this.distritos();
  }

  municipios(){
    this.api.getMunicipios().subscribe((response: any ) => { 
      this.datos = response.data;
    console.log(response);
    })
  }
  region(){
    this.api.getRegiones().subscribe((response: any ) => { 
      this.data = response.data;
    console.log(response);
    })
  }

  distritos(){
    this.api.getDistritos().subscribe((response: any ) => { 
      this.distrito = response.data;
    console.log(response);
    })
  }
  
  enviar(): any {
    console.log(this.FormMunicipio.value);
    this.api.agreMunicipio(this.FormMunicipio.value).subscribe(() => {
      this.router.navigateByUrl('municipios', { skipLocationChange: true }).then(() => {
        this.router.navigate(['municipios']);
        this.mostrarSnackBar('SE AGREGÓ CON ÉXITO', 'success-snackbar');
        window.location.reload();
     });
     
    });
  }
  

mostrarSnackBar(mensaje: string, clase: string): void {
  this.snackBar.open(mensaje, '', {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
    panelClass: [clase],
  });
}


cancelar() {
  this.router.navigateByUrl('panel');
}
}

