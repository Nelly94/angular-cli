import { Component, OnInit } from '@angular/core';
import {Product} from '../model/Product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  selectedProduct: string;
  productFilterInput = '';
  productList: Product[];

  ngOnInit(): void {
    this.productService.getProducts().then(list => {this.productList = list;});
  }

  updateSelection(productName: string){
    this.selectedProduct = productName;
  }

  filter(){
    console.log(this.productFilterInput);
    return this.productList.filter(c => c.name.toLocaleLowerCase().indexOf(this.productFilterInput.toLocaleLowerCase()) !== -1);
  }

}
