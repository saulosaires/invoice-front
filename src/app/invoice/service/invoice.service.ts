import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Page} from "../../data/page";
import {Invoice} from "../model/invoice";

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {

  private path = '/api/invoices/';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Invoice> {
    return this.http.get<Invoice>(this.path + id);
  }

  findByUser(page: number, size: number, field: string, sortDirection: string): Observable<Page<Invoice>> {

    let param = new HttpParams();
    param = param.set('page', page);
    param = param.set('size', size);
    param = param.set('sort', field + ',' + sortDirection);
    const options = {params: param};

    return this.http.get<Page<Invoice>>(this.path, options);
  }

  save(invoice: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(this.path, invoice);
  }

  delete(id: string): Observable<Invoice> {
    return this.http.delete<Invoice>(this.path + id);
  }
}
