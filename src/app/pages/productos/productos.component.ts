import { Component } from '@angular/core';
import { ProductoInterface } from '../../interfaces/producto-interface';
import { ApiService } from '../../services/api.service';
import { log } from 'console';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
public productosList:ProductoInterface [] = []

constructor(private servicio:ApiService){}

ngOnInit():void{
  this.servicio.getProductos().subscribe((data:any)=>{
      console.log(data);
      
    this.productosList = data;
  })
}
}
