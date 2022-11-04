import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import { RegisterI } from '../models/register.interface';
import { loginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url:string = 'http://127.0.0.1:3000/lab';
 

  constructor(private http:HttpClient, private loginService : loginService) { }

 

  register(user:string, password:string,rol:string,status:string):Observable<RegisterI>{
    let direccion = `${this.url}/registerUser`
    return this.http.post<RegisterI>(direccion,{user,password,rol,status})
  }

  login(form:LoginI):Observable<ResponseI>{
    let direccion = `${this.url}/auth`
    return this.http.post<ResponseI>(direccion,form)
  }


  serviceGetUsers():Observable<any>{
   
    let direccion = `${this.url}/allUsers`;
    return this.http.get(direccion)

  
  }

}
