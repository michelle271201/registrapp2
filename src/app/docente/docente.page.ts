import { Component, OnInit } from '@angular/core';
import { Global } from '../../app/global';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage {
  showQRCode: boolean = false;
  isAuth: boolean = Global.isAuth;
  constructor() {}

  generateQRCode() {
    this.showQRCode = !this.showQRCode; 
  }

  ionViewWillLeave() {
    this.showQRCode = false; 
  }
}

