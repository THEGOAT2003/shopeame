import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
public baseURL:string="http://localhost:3000"
public productosUrl:string=`${this.baseURL}/productos`

  constructor(private http:HttpClient) { }
  public getProductos(){
    return this.http.get(this.productosUrl)
  }

  public getProductosById(id: number){
    return this.http.get(`${this.productosUrl}/${id}`)
  }
  public postProducto(producto:any){
    return this.http.post(this.productosUrl, producto)
  }
}
