import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PacientesComponent } from './pacientes/pacientes.component';

const routes: Routes = [

 {path: 'dashboard', component: PagesComponent,
    children: [
      {path: '', component:DashboardComponent, data:{titulo:'Dashboard'}},
      {path: 'usuarios', component:UsuariosComponent, data:{titulo:'Usuarios'}},
      {path: 'pacientes', component:PacientesComponent, data:{titulo:'Pacientes'}}
    ]
  }
]

@NgModule({
  declarations: [], //posiblemente eliminar
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
