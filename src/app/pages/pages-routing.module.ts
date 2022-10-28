import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

 {path: 'dashboard', component: PagesComponent,
    children: [
      {path: '', component:DashboardComponent},
      {path: 'usuarios', component:UsuariosComponent}
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
