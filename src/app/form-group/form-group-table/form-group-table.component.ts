import { Component, OnInit } from '@angular/core';
import { FormGroupService } from '../form-group.service';
import { User } from '../user';

@Component({
  selector: 'app-form-group-table',
  templateUrl: './form-group-table.component.html',
  styleUrls: ['./form-group-table.component.css']
})
export class FormGroupTableComponent implements OnInit {
  users: User[];

  constructor(private formService: FormGroupService) { }

  ngOnInit() {
    this.users = this.formService.users;
  }

}
