import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FormBuilder } from '@angular/forms';
import { RegionService } from 'src/app/service/region.service';
import { Regiones } from 'src/app/interfaces/regiones';
import { Oficina } from 'src/app/interfaces/oficina';
import { Municipios } from 'src/app/interfaces/municipios';
import { Localidades } from '../../../interfaces/localidades';

@Component({
  selector: 'app-uniconomica',
  templateUrl: './uniconomica.component.html',
  styleUrls: ['./uniconomica.component.css']
})
export class UniconomicaComponent implements OnInit {
  regi: Regiones[]=[];
  data:  Oficina[]=[];
  muni: Municipios[]=[];
  locali: Localidades[]=[];
  constructor(private  api:ApiService,private apiRegiones:RegionService ,private router:Router, public formulario:FormBuilder) { }

  ngOnInit(): void {
    this.Regiones();
    this.Municipios();
    this.oficin();
    this.Localidades();
   
  } 
  Regiones(){
    this.apiRegiones.getRegiones().subscribe((response: any ) => { 
      this.regi = response.data;
    console.log(response);
    })
  }

  Municipios(){
    this.api.getMunicipios().subscribe((response: any ) => { 
      this.muni = response.data;
    console.log(response);
    })
  }

  Localidades(){
    this.api.getLocalidades().subscribe((response: any ) => { 
      this.locali = response.data;
    console.log(response);
    })
  }

  oficin(){
    this.api.getOfi().subscribe((response: any ) => { 
      this.data = response.data;
    console.log(response);
    })
  }

  
}
