import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.page.html',
  styleUrls: ['./product-view.page.scss'],
})
export class ProductViewPage implements OnInit {
  product;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    this.route.params.subscribe(param => {
      let id = param.id;
      this.product = products[id];
    })
  }

}
