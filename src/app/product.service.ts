import { Injectable } from '@angular/core';
import {Product} from './model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products = [new Product('Vodka bottle',  'Best russian alcohol', 10, null),
    new Product('Jamón', 'From Extremadura', 98, 15),
    new Product('Caviar', 'Top quality', 9568, 2)];

  public getProducts(): Promise<Product[]> {
    return new Promise(resolve => resolve(this.products));
  }

  public add(p: Product){
    this.products.push(p);
  }

  public getOne(index: number){
    return new Promise(resolve => resolve(this.products[index]));
  }

  public delete(index: number){
    this.products.splice(index, 1);
  }
}
