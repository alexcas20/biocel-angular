import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/pages/dialog/dialog.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  titulo = 'Usuarios'
  usuarios:any;
  constructor(private apiService: ApiService, private dialog: MatDialog) { }
  /* showModal = false; */
  ngOnInit(): void {
    this.apiService.serviceGetUsers().subscribe((resp) => {
      console.log(resp)
      this.usuarios = resp;
    })
  }

  /* abrirModalRegistroUsuario(){
    console.log('hola');
    this.showModal= true
    console.log(this.showModal)
  } */

  openDialog(){
    this.dialog.open(DialogComponent, {
      width: '30%'
    });
  }


}
