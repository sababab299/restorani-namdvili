import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiURL = "https://restaurant.stepprojects.ge/api/Products/GetAll"

  constructor(private http: HttpClient) { }

  products: any=[]

  getProducts(){
    this.http.get(this.apiURL).subscribe((data: any) => {
      this.products=data
    })
    return this.products
}
}
