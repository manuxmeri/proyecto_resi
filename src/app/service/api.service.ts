import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Roles } from '../interfaces/roles';
import { Oficina } from '../interfaces/oficina';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  path = `${environment.API_URL}oficinas`;

  constructor(private http: HttpClient) { }


  getUni(){
    return this.http.get(this.path);
  }

  getRegiones(){
    return this.http.get('http://localhost:8000/api/regiones');
  }
  getMunicipios(){
    return this.http.get('http://localhost:8000/api/municipios');
  }
  
  getLocalidades(){
    return this.http.get('http://localhost:8000/api/localidades');
  }

  getRoles(){
    return this.http.get('http://localhost:8000/api/roles');
  }
  
  
  /*agregar(uni: unidad): Observable<unidad>{
    return this.http.post<unidad>(`${this.path}`, uni)
  }*/

  getOfi(){
    return this.http.get('http://localhost:8000/api/oficinas');
  }
 
  agreOfi(ofi: Oficina): Observable<Oficina>{
    return this.http.post<Oficina>(`${this.path}`, ofi)
  }

  getId(id:any):Observable<Oficina>{
    return this.http.get<Oficina>(this.path+'/'+id);  
  }

 
  editOfi(id: any ,put:  Oficina):Observable<Oficina>{
    let direccion = this.path+"/"+ id;
    return this.http.put<Oficina>(direccion, put)
  }

  eliminar(id:any): Observable<any>{
    return this.http.delete<any>(`${this.path}/${id}`);
  }

}
