import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-uniconomica',
  templateUrl: './uniconomica.component.html',
  styleUrls: ['./uniconomica.component.css']
})
export class UniconomicaComponent implements OnInit {
  data:  any[]=[];
  constructor(private  api:ApiService ,private router:Router, public formulario:FormBuilder) { }

  ngOnInit(): void {
  
    this.oficin();
  } 
  oficin(){
    this.api.getOfi().subscribe((response: any ) => { 
      this.data = response.data;
    console.log(response);
    })
  }
}
