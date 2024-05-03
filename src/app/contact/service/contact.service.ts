import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Contact} from "../model/contact";
import {Page} from "../../data/page";

@Injectable({
  providedIn: 'root',
})
export class ContactsService {

  private path = '/api/contacts/';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Contact> {
    return this.http.get<Contact>(this.path + id);
  }

  findByUser(page: number, size: number, field: string, sortDirection: string): Observable<Page<Contact>> {

    let param = new HttpParams();
    param = param.set('page', page);
    param = param.set('size', size);
    param = param.set('sort', field + ',' + sortDirection);
    const options = {params: param};

    return this.http.get<Page<Contact>>(this.path, options);
  }

  save(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.path, contact);
  }

  delete(id: string): Observable<Contact> {
    return this.http.delete<Contact>(this.path + id);
  }
}
