import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../model/Account';
import { Beneficiary } from '../model/beneficiary';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  constructor(
    private http: HttpClient
  ) { }

  addBeneficiary(userId: number, beneficiary: Beneficiary): Observable<String> {
    return this.http.post<String>(`http://localhost:8080/api/customer/${userId}/beneficiary`, beneficiary);
  }

  getBeneficiaries(userId: number): Observable<Beneficiary[]> {
    return this.http.get<Beneficiary[]>(`http://localhost:8080/api/customer/${userId}/beneficiary`);
  }

  deleteBeneficiary(userId: number, beneficiaryId: number): Observable<String> {
    return this.http.delete<String>(`http://localhost:8080/api/customer/${userId}/beneficiary/${beneficiaryId}`);
  }

  getAllBeneficiaries(): Observable<Beneficiary[]> {
    return this.http.get<Beneficiary[]>('http://localhost:8080/api/staff/beneficiary');
  }

  approveBeneficiary(beneficiaryId: number): Observable<String> {
    return this.http.put<String>('http://localhost:8080/api/staff/beneficiary', beneficiaryId);
  }
}
