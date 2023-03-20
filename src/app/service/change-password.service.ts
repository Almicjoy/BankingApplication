import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(private http: HttpClient) { }

  changePassword(username: string, password: string): Observable<String> {
    return this.http.post<String>(`http://localhost:8080/api/customer/changePassword/${username}`, password);
  }
}
