import { Component, OnInit } from '@angular/core';
import {Product} from '../model/Product';
import {ProductService} from '../product.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService, private userService: UserService) { }

  selectedProduct: string;
  productFilterInput = '';
  productList: Product[];
  stringtrial: string;

  ngOnInit(): void {
    this.productService.getProducts().then(list => {this.productList = list;});
    this.stringtrial = this.userService.getPosts();
    console.log(this.stringtrial);
  }

  updateSelection(productName: string){
    this.selectedProduct = productName;
  }

  filter(){
    console.log(this.productFilterInput);
    return this.productList.filter(c => c.name.toLocaleLowerCase().indexOf(this.productFilterInput.toLocaleLowerCase()) !== -1);
  }

}
