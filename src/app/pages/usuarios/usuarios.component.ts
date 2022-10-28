import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  titulo = 'Usuarios'
  usuarios:any;
  constructor(private apiService: ApiService) { }
  showModal = false;
  ngOnInit(): void {
    this.apiService.serviceGetUsers().subscribe((resp) => {
      console.log(resp)
      this.usuarios = resp;
    })
  }

  abrirModalRegistroUsuario(){
    console.log('hola');
    this.showModal= true
    console.log(this.showModal)
    
  }

}
