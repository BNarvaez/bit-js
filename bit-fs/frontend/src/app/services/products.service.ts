import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../interfaces/products';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  httpClient = inject(HttpClient);

  createProduct(product: Product) {
    console.log('Producto:', product);
    return this.httpClient.post('http://localhost:3000/productos', product);
  }


  getAllProducts() {
    return this.httpClient.get('http://localhost:3000/productos');
  }

  getOneAllProducts(id: string) {
    return this.httpClient.get(`http://localhost:3000/productos/${id}`);
  }

  updateProduct(id: string | null, product: { titulo: string | null, precio: number | null, descripcion: string | null, imagen: string | null }) {
    return this.httpClient.put(`http://localhost:3000/productos/${id}`, product);
  }


  deleteOneProduct(id: string) {
    return this.httpClient.delete(`http://localhost:3000/productos/${id}`);
  }


}
