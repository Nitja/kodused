import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  products;

  constructor() {}

  ionViewDidEnter() {
   this.products = JSON.parse(localStorage.getItem("products")) || []; 
  }
}
