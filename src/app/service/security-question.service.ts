import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SecurityQuestion } from '../model/securityQuestion';

@Injectable({
  providedIn: 'root'
})
export class SecurityQuestionService {

  constructor(private http: HttpClient) { }

  getAllSecurityQuestions(): Observable<SecurityQuestion[]>{
    return this.http.get<SecurityQuestion[]> ('http://localhost:8080/api/customer/findAllQuestions');
  }
}
