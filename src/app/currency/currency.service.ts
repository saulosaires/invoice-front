import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Currency} from "./currency";

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {

  private path = '/api/currencies/';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.path);
  }

}
