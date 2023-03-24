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
  isStaffLoggedIn = this._isStaffLoggedIn$.asObservable();

  private _isAdminLoggedIn$ = new BehaviorSubject<boolean>(false);
  isAdminLoggedIn = this._isAdminLoggedIn$.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    const token = sessionStorage.getItem('staffToken');
    this._isStaffLoggedIn$.next(!!token);

    const adminToken = sessionStorage.getItem('adminToken');
    this._isAdminLoggedIn$.next(!!adminToken);
  }

  loginStaff(loginRequest: LoginRequest): Observable<JwtToken> {
    return this.http.post<JwtToken>('http://localhost:8080/api/staff/authenticate', loginRequest).pipe(
      tap((response: any) => {
        this._isStaffLoggedIn$.next(true);
        sessionStorage.setItem('staffToken', response.token);
      })
    );
  }

  loginAdmin(loginRequest: LoginRequest): Observable<JwtToken> {
    return this.http.post<JwtToken>('http://localhost:8080/api/admin/authenticate', loginRequest).pipe(
      tap((response: any) => {
        this._isAdminLoggedIn$.next(true);
        sessionStorage.setItem('adminToken', response.token);
      })
    )
  }


  logout() {
    sessionStorage.removeItem('staffToken');
    this._isStaffLoggedIn$.next(false);
    this.router.navigate(['/home'])
    .then(() => {
      window.location.reload();
    });
  }

  adminLogout() {
    sessionStorage.removeItem('adminToken');
    this._isAdminLoggedIn$.next(false);
    this.router.navigate(['/home'])
    .then(() => {
      window.location.reload();
    });
  }




}
