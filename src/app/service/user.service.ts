import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { ManageProfileInfo } from '../model/ManageProfileInfo';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  findUserById(userId: number): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:8080/api/customer/${userId}`);
  }

  uploadUserDetails(profileInfo: FormData, userId: number) {
    return this.http.put<ManageProfileInfo>(`http://localhost:8080/api/customer/${userId}`, profileInfo);
  }

  findAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8080/api/staff/customer');
  }

  changeCustomerStatus(customer: Customer): Observable<String> {
    return this.http.put<String>('http://localhost:8080/api/staff/customer', customer);
  }
}
