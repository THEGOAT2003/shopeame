import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css'
})
export class GestionComponent {
constructor(private servicio:ApiService){}

public producto:any = {
  nombre: "",
  precio: "",
  imagen: ""
}

addProducto(){
  this.servicio.postProducto(this.producto).subscribe();
}
}
