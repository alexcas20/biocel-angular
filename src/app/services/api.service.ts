import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url:string = 'http://127.0.0.1:5000/lab'

  constructor(private http:HttpClient) { }

  serviceGetUsers():Observable<any>{
    let direccion = `${this.url}/allUsers`;
    return this.http.get(direccion);
  }
}
