import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductoService } from './services/producto.service';
import { ListaProductoComponent } from './productos/lista-producto/lista-producto.component';
import { HomeComponent } from './home/home/home.component';
import { DetalleProductoComponent } from './productos/detalle-producto/detalle-producto.component';
import { NuevoProductoComponent } from './productos/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaProductoComponent,
    HomeComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
