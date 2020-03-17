import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ListaProductoComponent } from './productos/lista-producto/lista-producto.component';
import { DetalleProductoComponent } from './productos/detalle-producto/detalle-producto.component';
import { NuevoProductoComponent } from './productos/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'lista', component: ListaProductoComponent},
  {path: 'detalle/:id', component: DetalleProductoComponent},
  {path: 'nuevo', component: NuevoProductoComponent},
  {path: 'editar/:id', component: EditarProductoComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
