import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Distritos } from 'src/app/interfaces/distritos';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-distritos',
  templateUrl: './distritos.component.html',
  styleUrls: ['./distritos.component.css']
})
export class DistritosComponent implements OnInit {
  FormDistrito:FormGroup;
  data:  any[]=[];
  datos:  Distritos[]=[];
  constructor(private snackBar: MatSnackBar, private api:ApiService,private router:Router, public formulario:FormBuilder){ 
  this.FormDistrito=this.formulario.group({
    NombreDistrito: ['',Validators.required],
    Regid: ['',Validators.required],
     });
     console.log(this.FormDistrito);
}
  
  ngOnInit(): void {
  
   this.distritos();
   this.region();
  }

  distritos(){
    this.api.getDistritos().subscribe((response: any ) => { 
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
  
  enviar(): any {
    console.log(this.FormDistrito.value);
    this.api.agreDistrito(this.FormDistrito.value).subscribe(() => {
      this.router.navigateByUrl('distritos', { skipLocationChange: true }).then(() => {
        this.router.navigate(['distritos']);
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


