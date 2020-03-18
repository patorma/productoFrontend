import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Producto } from '../models/producto';
import { map, catchError } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

const cabecera = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
 productoURL = 'http://localhost:8080/api/productos/';

  constructor(private httpClient: HttpClient,  private router: Router) { }
  
  getProductos(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.productoURL}lista`);
  }

  getDetalle(id: number): Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.productoURL}detalle/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/lista']);
        console.error(e.error.mensaje);
        swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  crear(producto: Producto): Observable<Producto>{
    return this.httpClient.post(`${this.productoURL}producto`, producto, cabecera).pipe(
      map((response: any) => response.producto as Producto),
      catchError( e =>{
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  update(producto: Producto): Observable<any>{
    return this.httpClient.put<any>(`${this.productoURL}actualiza/${producto.id}`,producto,cabecera);
  }

  borrar(id: number): Observable<any>{
    return this.httpClient.delete<any>(`${this.productoURL}producto/${id}`,cabecera);
  }

}
