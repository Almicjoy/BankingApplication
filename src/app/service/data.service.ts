import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { JwtToken } from '../model/jwtToken';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private subject = new Subject<any>();
  sendData(message: any) {
    this.subject.next(message);
  }

  get Data(): Observable<any> {
    return this.subject.asObservable();
  }
}
