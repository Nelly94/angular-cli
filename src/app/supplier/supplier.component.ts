import {Component, Input, OnInit} from '@angular/core';
import {Supplier} from '../model/Supplier';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor() {
  }

  @Input()
  s: Supplier;

  ngOnInit(): void {
  }

}
