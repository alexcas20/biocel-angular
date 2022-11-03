import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginI } from 'src/app/models/login.interface';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public myForm!:FormGroup;


  user: string = '';
  pass:string = '';

  constructor(private fb:FormBuilder, private ruta:Router, private api: ApiService) { }

  ngOnInit(): void {
    this.myForm = this.createMyForm();
  }

  createMyForm():FormGroup{
    return this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    });
  }

  

  get f():any{
    return this.myForm.controls;
  }

  onLogin(form:LoginI){
    this.api.login(form).subscribe(resp => {
      console.log(resp);
    })
  }


  // login(form:string){
  //   console.log(this.user);
  //   console.log(this.pass)

  //     if(this.user === 'jacs' && this.pass === '12345'){
  //      let userL = document.getElementById(form)?.setAttribute('routerLink', '/dashboard');
  //       console.log(userL)
  //     }
  //     else{
  //       alert('Datos incorrectos')
  //     }
  // }
}
