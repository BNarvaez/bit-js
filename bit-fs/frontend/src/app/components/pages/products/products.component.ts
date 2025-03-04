import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import {Product} from '../../../interfaces/products'
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-products',
  imports: [FormsModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  productsService = inject(ProductsService);

  productos: any[] = [];
  esCrear: boolean = false;
  esEditar: boolean = false; 

  titulo: string = '';
  precio: number = 0;
  descripcion: string = '';
  imagen: string = '';


  ngOnInit() {
    this.obtenerTodosLosProductos();
  }

  quiereCrear() {
    this.esCrear = true;
  }

  nuevoProducto() {
    console.log('titulo:', this.titulo);
    console.log('precio.', this.precio);
    console.log('descripcion:', this.descripcion);
    console.log('imagen:', this.imagen)
    const producto: Product = {
      titulo: this.titulo,
      precio: this.precio,
      descripcion: this.descripcion,
      imagen: this.imagen
    };

    this.productsService.createProduct(producto).subscribe((res: any) => {
      console.log('Respuesta:', res);
      this.obtenerTodosLosProductos();
      this.esCrear = false;
    });
  }



  obtenerTodosLosProductos() {
    this.productsService.getAllProducts().subscribe((res: any) => {
      console.log('Respuesta:', res);
      this.productos = res.data;
    });
  }

}
