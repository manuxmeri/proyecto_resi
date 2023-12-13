import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Roles } from '../interfaces/roles';
import { Oficina } from '../interfaces/oficina';
import { Uniconomicafisica } from '../interfaces/uniconomicafisica';
import { ArtePesca } from '../interfaces/arte-pesca';
import { Especies } from '../interfaces/especies';
import { unidadMoral } from '../interfaces/unidad-moral';
import { Socios } from '../interfaces/socios';
import { Productos } from '../interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  path = `${environment.API_URL}oficinas`;

path2 = `${environment.API_URL}unidades_economicas_pa_fisico`;
  constructor(private http: HttpClient) { }


  
  getRegiones(){
    return this.http.get('http://localhost:8000/api/regiones');
  }
  getMunicipios(){
    return this.http.get('http://localhost:8000/api/municipios');
  }
  
  getUnifisica(){
    return this.http.get('http://localhost:8000/api/unidades_economicas_pa_fisico');
  }

  showUnifisica(){
    return this.http.get('http://localhost:8000/api/unidades_economicas_pa_fisico');
  }
  getLoc(){
    return this.http.get('http://localhost:8000/api/localidades');
  }
  getLocalidades(){
    return this.http.get('http://localhost:8000/api/localidades');
  }

  getRoles(){
    return this.http.get('http://localhost:8000/api/roles');
  }
  getTelefonos(){
    return this.http.get('http://localhost:8000/api/telefonos_pa_fisico');
  }
  
  
  /*agregar(uni: unidad): Observable<unidad>{
    return this.http.post<unidad>(`${this.path}`, uni)
  }*/
//Arte_Pesca 
agreArt(pesca: ArtePesca):Observable<ArtePesca>{
  let direccion = "http://localhost:8000/api/artes_pesca";
  return this.http.post<ArtePesca>(direccion, pesca)
} 
getArt(){
  return this.http.get('http://localhost:8000/api/artes_pesca');
} 

//Especies 
agreEsp(especie: Especies):Observable<Especies>{
  let direccion = "http://localhost:8000/api/especies";
  return this.http.post<Especies>(direccion, especie)
} 

getEspecie(){
  return this.http.get('http://localhost:8000/api/especies');
}

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
    let direccion = this.path2+"/"+ id;
    return this.http.put<Oficina>(direccion, put)
  }

  showUnifisicas(id: any ,put:  Oficina):Observable<Oficina>{
    let direccion = this.showUnifisicas+"/"+ id;
    return this.http.put<Oficina>(direccion, put)
  }

  eliminar(id:any): Observable<any>{
    return this.http.delete<any>(`${this.path}/${id}`);
  }


  agreUni(uni: Uniconomicafisica):Observable<Uniconomicafisica>{
    let direccion = "http://localhost:8000/api/unidades_economicas_pa_fisico";
    return this.http.post<Uniconomicafisica>(direccion, uni)
  }
  
  
  editUnidadF(id: any ,put:  Uniconomicafisica):Observable<Uniconomicafisica>{
    let direccion = this.path+"/"+ id;
    return this.http.put<Uniconomicafisica>(direccion, put)
  }
  
  getIdUnidadF(id:any):Observable<Uniconomicafisica>{
    return this.http.get<Uniconomicafisica>(this.path2+'/'+id);  
  }

  agreMoral(moral: unidadMoral): Observable<unidadMoral> {
    let direccion = "http://localhost:8000/api/unidades_economicas_pa_moral";
    return this.http.post<unidadMoral>(direccion, moral)
  }

  getMoral() {
    return this.http.get('http://localhost:8000/api/unidades_economicas_pa_moral');
  }

  agreSocio(socio: Socios): Observable<Socios> {
    let direccion = "http://localhost:8000/api/socios_detalles_pa_moral";
    return this.http.post<Socios>(direccion, socio)
  }
  agreProduc(producto: Productos): Observable<Productos> {
    let direccion = "http://localhost:8000/api/productos";
    return this.http.post<Productos>(direccion, producto)
  }
  getProd() {
    return this.http.get('http://localhost:8000/api/productos');
  }

}
