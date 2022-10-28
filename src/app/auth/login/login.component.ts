import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public myForm!:FormGroup;


  user: string = '';
  pass:string = '';

  constructor(private fb:FormBuilder, private ruta:Router) { }

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
