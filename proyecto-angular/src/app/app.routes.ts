import { Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { FoundationsComponent } from './components/foundations/foundations.component';
import { FormComponent } from './components/form/form.component';


export const routes: Routes = [
    {path: "inicio", component: HomeComponent},
    {path: "fundamentos", component: FoundationsComponent},
    {path: "contacto", component: FormComponent}
];
