import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { User } from '../form-group/user';
import { FormGroupService } from './form-group.service';

@Component({
  selector: "app-form-group",
  templateUrl: "./form-group.component.html",
  styleUrls: ["./form-group.component.css"]
})
export class FormGroupComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl(null),
    email: new FormControl(null),
    age: new FormControl(null),
    phone: new FormControl(null),
    hasWhatsapp: new FormControl(null)
  });

  constructor(private formService: FormGroupService) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.contactForm);
    this.formService.users.push(this.contactForm.value);
  }
}
