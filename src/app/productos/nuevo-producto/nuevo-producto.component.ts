import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  private producto: Producto = new Producto();
  public titulo: string = 'Crear producto';

  constructor(private productoService: ProductoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public create(): void {
    this.productoService.crear(this.producto)
      .subscribe(producto => {
         this.router.navigate(['/lista'])
         swal.fire('Nuevo Producto', ` El producto ${producto.nombreProducto} ha sido creado con éxito!`,'success');
      })
  }
}
