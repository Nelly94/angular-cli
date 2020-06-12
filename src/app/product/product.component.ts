import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Product} from '../model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  @Output()
  outputSelection: EventEmitter<string> = new EventEmitter();

  @Input()
  p: Product;

  ngOnInit(): void {
  }

  @HostListener('click')
  callParent() {
    this.outputSelection.emit(this.p.name);
  }
}
