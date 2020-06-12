import { Component, OnInit } from '@angular/core';
import {Product} from '../model/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  product1: Product;
  product2: Product;
  selectedProduct: string;

  ngOnInit(): void {
    this.product1 = new Product('Vodka bottle',  'Best russian alcohol');
    this.product2 = new Product('Jamón', 'From Extremadura');
  }

  updateSelection(productName: string){
    this.selectedProduct = productName;
  }

}
