import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSave(form: NgForm) {
    if ( form.invalid ) { // Validating form has data
      return;
    }

    console.log(form);
  }

}
