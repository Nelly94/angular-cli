import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  constructor() { }

  total: number;
  firstNumber: number;
  secondNumber: number;
  thirdNumber: number;

  ngOnInit(): void {
    this.firstNumber = 0;
    this.secondNumber = 2;
    this.thirdNumber = 8;

    this.total = this.firstNumber + this.secondNumber + this.thirdNumber;
  }

  adjustTotal(operation: number){
    if (operation === 0){

    }else{
      this.total += operation;
    }
  }

}
