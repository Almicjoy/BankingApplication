import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../model/customer';
import { map, tap } from 'rxjs/operators';
import { LoginRequest } from '../model/loginRequest';
import { JwtToken } from '../model/jwtToken';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private _isNotLoggedIn$ = new BehaviorSubject<boolean>(true);
  isLoggedIn = this._isLoggedIn$.asObservable();
  isNotLoggedIn = this._isNotLoggedIn$.asObservable();


  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    const token = sessionStorage.getItem('jwtToken');
    this._isLoggedIn$.next(!!token);
    this._isNotLoggedIn$.next(!token);
   }

  loginCustomer(loginRequest: LoginRequest): Observable<JwtToken> {
    return this.http.post<JwtToken>('http://localhost:8080/api/customer/authenticate', loginRequest).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        this._isNotLoggedIn$.next(false);
        sessionStorage.setItem('jwtToken', response.token);
      })
    );
  }


  logout() {
    sessionStorage.removeItem('jwtToken');
    this._isLoggedIn$.next(false);
    this._isNotLoggedIn$.next(true);
    this.router.navigate(['/home'])
    .then(() => {
      window.location.reload();
    });

  }


}
