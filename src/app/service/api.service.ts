import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Roles } from '../interfaces/roles';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  path = `${environment.API_URL}roles`;

  constructor(private http: HttpClient) { }

  getRoles(){
    return this.http.get(this.path);
  }
}
