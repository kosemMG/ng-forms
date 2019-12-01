import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  name = new FormControl(null);
  email = new FormControl(null);
  myEmail = new FormControl(null);
  users: {}[] = [];

  constructor() { }

  ngOnInit() {
  }

  addUser() {
    this.users.push({
      name: this.name.value,
      email: this.email.value
    });
  }

  updateEmail() {
    this.myEmail.setValue('email');
  }
}
