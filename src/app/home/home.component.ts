import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatTabChangeEvent} from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(event: MatTabChangeEvent) {
    console.log(event.index);
    if (event.index === 0) {
      this.router.navigate(['/products']);
    }else{
      this.router.navigate(['/suppliers']);
    }

  }

}
