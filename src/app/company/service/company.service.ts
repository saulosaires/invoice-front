import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Company} from "../model/company";

@Injectable({
  providedIn: 'root',
})
export class CompanyService {

  private path = '/api/companies/';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Company> {
    return this.http.get<Company>(this.path + id);
  }

  findByUser(): Observable<Company> {
    return this.http.get<Company>(this.path);
  }

  save(company: Company): Observable<Company> {
    return this.http.post<Company>(this.path, company);
  }

  delete(id: string): Observable<Company> {
    return this.http.delete<Company>(this.path + id);
  }
}
