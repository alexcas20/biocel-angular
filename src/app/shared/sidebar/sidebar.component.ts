import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit(): void {
    this.checkLocalStorage()
  }

  
  checkLocalStorage(){
    if(!localStorage.getItem('token')){
      this.ruta.navigate(['login'])
    }
  }


  logOut(){
    localStorage.removeItem('token');
    this.ngOnInit();
  }

  timerToken = setTimeout(() => {
    localStorage.removeItem('token')
    this.ngOnInit();
  },86400000)
  

}
