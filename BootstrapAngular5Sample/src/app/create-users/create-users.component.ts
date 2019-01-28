import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {
  constructor(public userService: UsersService, public router: Router) { }

  ngOnInit() {
  }

  onSave(form: NgForm) {
    if ( form.invalid ) { // Validating form has data
      return;
    }
    // console.log(form);
    const user: any = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      username: form.value.username,
      email: form.value.email,
      address: form.value.address,
      address2: form.value.address2,
      country: form.value.country,
      state: form.value.state,
      zip: form.value.zip
    };
    this.userService.saveUser(user);
  }

}
