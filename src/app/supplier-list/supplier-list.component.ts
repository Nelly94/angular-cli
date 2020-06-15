import { Component, OnInit } from '@angular/core';
import {Supplier} from '../model/Supplier';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  constructor() { }

  supplier1: Supplier;
  supplier2: Supplier;
  supplier3: Supplier;

  ngOnInit(): void {
    this.supplier1 = new Supplier('company 1', '123456789154');
    this.supplier2 = new Supplier('company 2', '123456');
    this.supplier3 = new Supplier('company 3', '123456584236');
  }

}
