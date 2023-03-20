import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
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
export class StaffLoginService {

  private _isStaffLoggedIn$ = new BehaviorSubject<boolean>(false);
  private _isStaffLoggedOut$ = new BehaviorSubject<boolean>(true);
  isStaffLoggedIn = this._isStaffLoggedIn$.asObservable();
  isStaffLoggedOut = this._isStaffLoggedOut$.asObservable();
  role: string = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    const token = sessionStorage.getItem('staffToken');
    this._isStaffLoggedIn$.next(!!token);
    this._isStaffLoggedOut$.next(!token);
  }

  loginStaff(loginRequest: LoginRequest): Observable<JwtToken> {
    return this.http.post<JwtToken>('http://localhost:8080/api/staff/authenticate', loginRequest).pipe(
      tap((response: any) => {
        this._isStaffLoggedIn$.next(true);
        this._isStaffLoggedOut$.next(false);
        sessionStorage.setItem('staffToken', response.token);
      })
    );
  }


  logout() {
    sessionStorage.removeItem('staffToken');
    this._isStaffLoggedIn$.next(false);
    this._isStaffLoggedOut$.next(true);
    this.router.navigate(['/home'])
    .then(() => {
      window.location.reload();
    });

  }




}
