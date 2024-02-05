import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Auth} from "../model/auth";
import {AuthResponse} from "../model/auth-response";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private path = '/api/auth/';

  constructor(private http: HttpClient) {
  }

  login(auth: Auth): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.path+'login',auth);
  }

}
