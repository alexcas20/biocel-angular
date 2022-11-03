import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    PagesComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    DashboardComponent,
    UsuariosComponent,
  ]
})
export class PagesModule { }
