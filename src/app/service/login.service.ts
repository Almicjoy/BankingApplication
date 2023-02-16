import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../model/customer';
import { map } from 'rxjs/operators';
import { LoginRequest } from '../model/loginRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  responseStatus: number = 0;

  // private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  loginCustomer(loginRequest: LoginRequest): Observable<HttpResponse<String>> {
    return this.http.post<String>('http://localhost:8080/api/customer/authenticate', loginRequest, {observe: 'response'});
  }
}
