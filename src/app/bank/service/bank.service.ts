import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Bank} from "../model/bank";

@Injectable({
  providedIn: 'root',
})
export class BanksService {

  private path = '/api/banks/';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Bank> {
    return this.http.get<Bank>(this.path + id);
  }
  findByUser(): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.path);
  }
  save(contact: Bank): Observable<Bank> {
    return this.http.post<Bank>(this.path, contact);
  }

    delete(id: string | undefined): Observable<Bank> {
    return this.http.delete<Bank>(this.path+ id);
  }
}
