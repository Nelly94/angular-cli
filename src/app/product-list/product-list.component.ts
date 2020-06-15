import { Component, OnInit } from '@angular/core';
import {Product} from '../model/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  // product1: Product;
  // product2: Product;
  selectedProduct: string;
  products = [new Product('Vodka bottle',  'Best russian alcohol'), new Product('Jamón', 'From Extremadura')];
  productFilterInput = '';

  ngOnInit(): void {
  }

  updateSelection(productName: string){
    this.selectedProduct = productName;
  }

  filter(){
    console.log(this.productFilterInput);
    return this.products.filter(c => c.name.toLocaleLowerCase().indexOf(this.productFilterInput.toLocaleLowerCase()) !== -1);
  }

}
