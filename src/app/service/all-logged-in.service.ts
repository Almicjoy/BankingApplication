import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllLoggedInService {

  private _allLoggedOut$ = new BehaviorSubject<boolean>(false);
  allLoggedOut = this._allLoggedOut$.asObservable();

  constructor() {
    const customerToken = sessionStorage.getItem('jwtToken');
    const staffToken = sessionStorage.getItem('staffToken');
    console.log(staffToken);
    console.log(customerToken == null && staffToken == null);
    this._allLoggedOut$.next(customerToken == null && staffToken == null);


  }
}
