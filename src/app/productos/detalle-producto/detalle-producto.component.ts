import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from 'src/app/models/producto';


@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  public producto: Producto = new Producto();
  constructor(private productoService: ProductoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.cargarProducto();
  }

  cargarProducto(): void {
    // se ve el id asociado al componete
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id'];
      if(id){
        this.productoService.getDetalle(id).subscribe((producto) => this.producto = producto)
      }
    })
  }
}
