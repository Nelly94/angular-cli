import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Product} from '../model/Product';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  @Output()
  outputSelection: EventEmitter<string> = new EventEmitter();

  @Input()
  p: Product;

  ngOnInit(): void {
    if (this.p == null || this.p === undefined){
      this.route.params.subscribe(params => {
        console.log(params.id);
        this.productService.getOne(params.id).then(product => this.p = product);
      });
    }
  }

  @HostListener('click')
  callParent() {
    this.outputSelection.emit(this.p.name);
  }

  delete(){
    this.productService.delete(this.p.id);
  }
}
