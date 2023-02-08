import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>("http://localhost:8080/api/customer/register", customer);
  }
}
