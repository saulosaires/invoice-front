import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Country} from "./country";

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  private path = '/api/countries/';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this.path);
  }

}
