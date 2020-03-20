import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import {  Router,ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }
  cargarProductos(): void {
    this.productoService.getProductos().subscribe(data =>{
      this.productos = data;
      console.log(this.productos);
    }, (err: any) => {
      console.log(err);
    })
  }

  delete(producto: Producto): void {
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar el producto ${producto.nombreProducto}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result)=>{
      if (result.value){
        this.productoService.borrar(producto.id).subscribe(
          response =>{
            // se comoprueba si el producto ya fue eliminado
            this.productos = this.productos.filter(pro => pro !== producto)
            swalWithBootstrapButtons.fire(
              'Producto eliminado!',
              `Producto ${producto.nombreProducto} eliminado con exito!`,
              'success'
            )
          }
        )
      }
    })
  }
}
