import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Supplier} from '../model/Supplier';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.css']
})
export class SupplierAddComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public supplierForm: FormGroup;
  public supplier: Supplier;

  ngOnInit(): void {
    this.supplierForm = this.fb.group({
      company: [this.supplier.company, Validators.required],
      bankAccount: [this.supplier.bankAccount, Validators.required],
    });
  }

  add() {

  }

}
