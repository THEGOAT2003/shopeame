import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { IdComponent } from './components/id/id.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"productos",
        component:ProductosComponent
    },
    {
        path:"gestion",
        component:GestionComponent
    },
    {
        path:"productos/:id",
        component:IdComponent
    }
];
