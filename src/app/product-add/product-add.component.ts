import { Component, OnInit } from '@angular/core';
import {Product} from '../model/Product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private productService: ProductService) { }

  p: Product = new Product('', '', null, null);

  ngOnInit(): void {
  }

  addProduct(){
    this.productService.add(this.p);
  }

}
