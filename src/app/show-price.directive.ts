import {Directive, ElementRef, Input, AfterContentInit} from '@angular/core';

@Directive({
  selector: '[appShowPrice]'
})
export class ShowPriceDirective implements AfterContentInit{

  constructor(private el: ElementRef) { }

  @Input('price')
  price: number;

  @Input('promo')
  promo: number;

  private color: string;
  private finalPrice: number;

  ngAfterContentInit() {
   this.calculatePrice();
  }

  private calculatePrice() {
    this.finalPrice = this.price;
    if (this.promo !== null) {
      if (this.promo <= 5) {
        this.color = 'blue';
      } else {
        this.color = 'green';
      }
      this.el.nativeElement.style.backgroundColor = this.color;
      this.finalPrice = this.price - (this.price * this.promo / 100);
    }
    this.el.nativeElement.append(this.finalPrice);
  }

}
