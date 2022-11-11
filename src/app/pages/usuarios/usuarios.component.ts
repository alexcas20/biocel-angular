import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/pages/dialog/dialog.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { filter } from 'rxjs';


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
    this.getAllUsers();
    /* this.api.getUsers().subscribe((resp) => {
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
