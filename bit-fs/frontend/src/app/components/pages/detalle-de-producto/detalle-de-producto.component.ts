import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-detalle-de-producto',
  imports: [FormsModule],
  templateUrl: './detalle-de-producto.component.html',
  styleUrl: './detalle-de-producto.component.css'
})
export class DetalleDeProductoComponent implements OnInit {
  
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  productsService = inject(ProductsService);

  productoId!: string | null;

  titulo!: string | null;
  precio!: number | null;
  descripcion!: string  | null;
  imagen!: string | null;
  estaListo: boolean = false;

  
  actualizarListo: boolean = false;
  quiereActualizar(){
    this.actualizarListo = true;
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros)=>{
      this.productoId = parametros.get('id')
      console.log('ID del producto:', this.productoId);
      if (this.productoId) {
        this.productsService.getOneAllProducts(this.productoId).subscribe((res: any) => {
          console.log('Respuesta:', res);
          this.titulo = res.data.titulo;
          this.precio = res.data.precio;
          this.descripcion = res.data.descripcion;
          this.imagen = res.data.imagen;
          this.estaListo = true;
        });
      }
    });
  }

  actualizar(){
    const producto = {
      titulo: this.titulo, 
      precio: this.precio,
      descripcion: this.descripcion,
      imagen: this.imagen
    }
    if (this.productoId) { 

    this.productsService.updateProduct(this.productoId, producto).subscribe((res: any) => {
    
      this.actualizarListo = false;
      console.log('Respuesta:', res);
    });
  }
}

  eliminar(){
    if (this.productoId) {
      this.productsService.deleteOneProduct(this.productoId).subscribe((res: any) => {
        if(res.mensaje === 'Producto eliminado'){
          this.router.navigateByUrl('/productos');
        }
        console.log('Respuesta:', res);
        
      });
    }
  }

}
