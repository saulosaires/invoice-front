import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private path = '/api/users/';

  constructor(private http: HttpClient) {
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.path,user);
  }

}
