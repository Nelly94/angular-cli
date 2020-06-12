import { Component } from '@angular/core';
import {Person} from './model/Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cli';

  thePerson = new Person('Frank', 'Zappa', 40);
  name = 'Peter';
  surname = 'Lanzani';
  age = 29;

  theColor = 'red';
  theValue = 'green';

  toggleColor(){
    if (this.theColor === 'blue') {
      this.theColor = 'red';
    }else{
      this.theColor = 'blue';
    }
  }

  toggleName(){
    this.thePerson.firstname = this.name;
    this.thePerson.lastname = this.surname;
    this.thePerson.age = this.age;
  }

  popup() {
    alert(this.theValue);
  }
}
