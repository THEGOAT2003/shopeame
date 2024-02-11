import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './core/nav/nav.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { IdComponent } from './components/id/id.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HomeComponent,NavComponent,GestionComponent,ProductosComponent, IdComponent, HttpClientModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-tienda';
}
