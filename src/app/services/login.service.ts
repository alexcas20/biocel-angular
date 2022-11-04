import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class loginService{

    url:string = 'http://localhost/';

    constructor(private http:HttpClient){ }

        getToken(){
            return localStorage.getItem('token')
        }
    
    }

