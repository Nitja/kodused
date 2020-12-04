import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.page.html",
  styleUrls: ["./product-add.page.scss"],
})
export class ProductAddPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSubmit(form) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(form.value);
    localStorage.setItem("products", JSON.stringify(products));
  }
}
