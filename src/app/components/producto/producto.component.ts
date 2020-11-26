import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import {ProductoService} from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: any;
  rol: any;
  titulo = 'Crear Producto';
  accion = 'Registrar';
  


  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {

    this.listar();
  }


  listar(): void {
    this.productoService.getProductos().subscribe(
      (data) => {
        console.log(data[0].cursor_roles);
        this.productos = data[0].cursor_productos;
        console.log("Productos", this.productos);
      }, (err) => {
        console.log("Error en el listar-rol-component")
      }
    )
  }
}
