import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Contact} from "../model/contact";

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
  findByUser(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.path);
  }
  save(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.path, contact);
  }
  delete(id: string): Observable<Contact> {
    return this.http.delete<Contact>(this.path+ id);
  }
}
