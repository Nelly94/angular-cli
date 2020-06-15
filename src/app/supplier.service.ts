import { Injectable } from '@angular/core';
import {Product} from './model/Product';
import {Supplier} from './model/Supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor() { }


  suppliers = [new Supplier('Mercadona',  'B4564564'),
    new Supplier('Carrefour',  's56254654'),
    new Supplier('BM',  '65469875612')];

  public getSuppliers(): Promise<Supplier[]> {
    return new Promise(resolve => resolve(this.suppliers));
  }

  public getOne(index: number){
    return new Promise(resolve => resolve(this.suppliers[index]));
  }

  public delete(index: number){
    this.suppliers.splice(index, 1);
  }
}
