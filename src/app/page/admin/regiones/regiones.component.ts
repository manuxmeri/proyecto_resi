import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.css']
})
export class RegionesComponent implements OnInit {

  FormRegion:FormGroup;
  data:  any[]=[];
  constructor(private snackBar: MatSnackBar, private api:ApiService,private router:Router, public formulario:FormBuilder){ 
  this.FormRegion=this.formulario.group({
    NombreRegion: ['',Validators.required],
     });
     console.log(this.FormRegion);
}
  
  ngOnInit(): void {
   this.region();
  }

  region(){
    this.api.getRegiones().subscribe((response: any ) => { 
      this.data = response.data;
    console.log(response);
    })
  }
  
  enviar(): any {
    console.log(this.FormRegion.value);
    this.api.agrerRegion(this.FormRegion.value).subscribe(() => {
      this.router.navigateByUrl('regiones', { skipLocationChange: true }).then(() => {
        this.router.navigate(['regiones']);
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

