import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  public usersList: any = [];
  constructor(public userService: UsersService) { }

  ngOnInit() {
    this.usersList = this.userService.listUsers();
  }

}
