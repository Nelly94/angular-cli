import { Component, OnInit } from '@angular/core';
import {Supplier} from '../model/Supplier';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  constructor() { }

  suppliers = [new Supplier('company 1', '123456789154'), new Supplier('company 2', '123456'), new Supplier('company 3', '123456584236')];

  ngOnInit(): void {
  }

}
