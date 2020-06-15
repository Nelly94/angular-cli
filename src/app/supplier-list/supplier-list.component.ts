import { Component, OnInit } from '@angular/core';
import {Supplier} from '../model/Supplier';
import {SupplierService} from '../supplier.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  constructor(private supplierService: SupplierService) { }

  suppliers: Supplier[];

  ngOnInit(): void {
    this.supplierService.getSuppliers().then(list => {this.suppliers = list;});
  }

}
