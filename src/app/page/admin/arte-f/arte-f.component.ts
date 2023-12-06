import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-arte-f',
  templateUrl: './arte-f.component.html',
  styleUrls: ['./arte-f.component.css']
})
export class ArteFComponent implements OnInit {

  FormArte:FormGroup;
  data:  any[]=[];
  constructor(private snackBar: MatSnackBar, private api:ApiService,private router:Router, public formulario:FormBuilder){ 
  this.FormArte=this.formulario.group({
    NombreArtePesca: [''],
     });
     console.log(this.FormArte);
}
  
  ngOnInit(): void {
   this.arte();
  }

  arte(){
    this.api.getArt().subscribe((response: any ) => { 
      this.data = response.data;
    console.log(response);
    })
  }
  
  enviar(): any {
    console.log(this.FormArte.value);
    this.api.agreArt(this.FormArte.value).subscribe(() => {
      this.router.navigateByUrl('artefisica', { skipLocationChange: true }).then(() => {
        this.router.navigate(['artefisica']);
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
