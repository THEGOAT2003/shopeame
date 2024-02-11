import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { log } from 'console';
import { ProductoInterface } from '../../interfaces/producto-interface';

@Component({
  selector: 'app-id',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './id.component.html',
  styleUrl: './id.component.css'
})
export class IdComponent {
id!:number;
producto!:ProductoInterface;

  constructor(private servicio:ApiService, private rutaActivada:ActivatedRoute){}
  ngOnInit():void{
    this.rutaActivada.paramMap.subscribe(params => {
      this.id = Number(params.get("id"))
      
    })

    this.servicio.getProductosById(this.id).subscribe((data2:any)=>{
      // console.log(data2);
      this.producto = data2
      
    })
  }
}
