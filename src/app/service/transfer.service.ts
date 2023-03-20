import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transfer } from '../model/transfer';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(
    private http: HttpClient
  ) { }

  transferMoney(transfer: Transfer): Observable<String> {
    return this.http.put<String>('http://localhost:8080/api/customer/transfer', transfer);
  }
  staffTransfer(transfer: Transfer): Observable<String> {
    return this.http.put<String>('http://localhost:8080/api/staff/transfer', transfer);
  }
}
