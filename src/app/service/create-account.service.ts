import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../model/Account';
import { AccountResponse } from '../model/AccountResponse';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  constructor(
    private http: HttpClient
  ) { }

  createAccount(userId: number, deposit: number, accountType: string): Observable<String> {
    return this.http.post<String>(`http://localhost:8080/api/customer/${userId}/account/deposit/${deposit}`, accountType);
  }

  // getAccounts(userId: number): Observable<AccountResponse> {
  //   return this.http.get<AccountResponse>(`http://localhost:8080/api/customer/${userId}/account`);
  // }

  getAccounts(userId: number): Observable<Account[]> {
    return this.http.get<Account[]>(`http://localhost:8080/api/customer/${userId}/account`);
  }

  getAccountById(userId: number, accountId: number): Observable<Account> {
    return this.http.get<Account>(`http://localhost:8080/api/customer/${userId}/account/${accountId}`);
  }

  getAllAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>('http://localhost:8080/api/staff/accounts');
  }

  approveAccount(accountId: number): Observable<String> {
    return this.http.put<String>('http://localhost:8080/api/staff/accounts/approve', accountId);
  }
  getAccountAndUser(accountNumber: number): Observable<Account> {
    return this.http.get<Account>(`http://localhost:8080/api/staff/account/${accountNumber}`);
  }
}
