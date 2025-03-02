import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/pages/products/products.component';

export const routes: Routes = [
    {path: 'inicio', title:'SPA | Inicio', component: HomeComponent},
    {path: 'productos', title:'SPA | Productos', component: ProductsComponent},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: '**', title: 'Error 404', component: PageNotFoundComponent}
];
