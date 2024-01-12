import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private path = '/api/products/';

  constructor(private http: HttpClient) {}

  findById(id: string): Observable<Product> {
    return this.http.get<Product>(this.path + id);
  }
  findByUser(): Observable<Product[]> {
    return this.http.get<Product[]>(this.path);
  }
  save(product: Product): Observable<Product> {
    return this.http.post<Product>(this.path, product);
  }
  delete(id: string): Observable<Product> {
    return this.http.delete<Product>(this.path+ id);
  }
}
