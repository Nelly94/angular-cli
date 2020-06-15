import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Product} from '../model/Product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

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

  delete(){
    this.productService.delete(this.p.id);
  }
}
