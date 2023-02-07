import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  bankLogoPath: string;

  constructor() {
    this.bankLogoPath = '/assets/images/bankLogo.png';
  }

}
