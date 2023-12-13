import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalSoliComponent } from '../modal-soli/modal-soli.component';
import { ApiService } from 'src/app/service/api.service';
import { Uniconomicafisica } from 'src/app/interfaces/uniconomicafisica';


@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  data:  Uniconomicafisica[]=[];

  constructor(private dialog: MatDialog, private api : ApiService) { }

  ngOnInit(): void {
    this.uni();
  }

  uni(){
    this.api.getUnifisica().subscribe((response: any) => { 
      this.data = response.data;
     console.log(response);
    })
  }


  openModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {}; 
  
    const dialogRef = this.dialog.open(ModalSoliComponent, dialogConfig);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal cerrado');
    });
  }
  

}
