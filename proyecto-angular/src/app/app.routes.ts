import { Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { FoundationsComponent } from './components/foundations/foundations.component';
import { FormComponent } from './components/form/form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


export const routes: Routes = [
    {path: "inicio", component: HomeComponent, title: 'Inicio'},
    {path: "fundamentos", component: FoundationsComponent, title: 'Fundamentos'},
    {path: "contacto", component: FormComponent, title: 'Contacto'},
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent, title: 'Error 404'}
];
