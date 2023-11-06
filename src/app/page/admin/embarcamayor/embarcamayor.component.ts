import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { Roles } from 'src/app/interfaces/roles';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-embarcamayor',
  templateUrl: './embarcamayor.component.html',
  styleUrls: ['./embarcamayor.component.css']
})

export class EmbarcamayorComponent implements OnInit {
 
  data:  Roles[]=[];
  constructor(private  api:ApiService ,private router:Router){}

  ngOnInit(): void {
    this.roles();

  } 

  roles(){
    this.api.getRoles().subscribe((response: any) => { 
      this.data = response.data;
      console.log(response);
    })
  }
}



