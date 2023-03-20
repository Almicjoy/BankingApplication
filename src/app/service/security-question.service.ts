import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { ForgotPasswordInfo } from '../model/forgotPasswordInfo';
import { SecurityQuestion } from '../model/securityQuestion';
import { UserQuestionAnswers } from '../model/userQuestionAnswers';

@Injectable({
  providedIn: 'root'
})
export class SecurityQuestionService {

  constructor(private http: HttpClient) { }

  getAllSecurityQuestions(): Observable<SecurityQuestion[]>{
    return this.http.get<SecurityQuestion[]> ('http://localhost:8080/api/customer/findAllQuestions');
  }

  saveSecurityQuestions(userQuestionList: UserQuestionAnswers[]): Observable<String> {
    return this.http.put<String>('http://localhost:8080/api/customer/saveSecurityQuestions', userQuestionList);
  }

  securityQuestionInfoValid(forgotPasswordInfo: ForgotPasswordInfo): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:8080/api/customer/${forgotPasswordInfo.username}/forgot/${forgotPasswordInfo.questionId}/${forgotPasswordInfo.answer}`);
  }
}
