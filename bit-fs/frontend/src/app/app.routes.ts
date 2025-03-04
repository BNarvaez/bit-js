import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { DetalleDeProductoComponent } from './components/pages/detalle-de-producto/detalle-de-producto.component';

export const routes: Routes = [
    {path: 'inicio', title:'SPA | Inicio', component: HomeComponent},
    {path: 'productos', title:'SPA | Productos', component: ProductsComponent},
    {
        path: 'productos/detalle-de-producto/:id',
        title: 'SPA | Productos',
        component: DetalleDeProductoComponent,
},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: '**', title: 'Error 404', component: PageNotFoundComponent}
];
