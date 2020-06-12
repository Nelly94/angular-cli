import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  constructor() { }

  @Input()
  myNumber: number;

  @Output()
  operation: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  addOne(){
    this.myNumber += 1;
    this.operation.emit(1);
  }

  substractOne(){
    if (this.myNumber > 0) {
      this.myNumber -= 1;
      this.operation.emit(-1);
    }
  }

  reset(){
    this.operation.emit(- this.myNumber);
    this.myNumber = 0;
  }
}
