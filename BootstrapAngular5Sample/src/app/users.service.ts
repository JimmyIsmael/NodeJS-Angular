import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersList: any = [];
  constructor(public router: Router) { }

  saveUser(user: any) {
    this.usersList.push(user);
    let listToReturn: any[];
    listToReturn = this.usersList;
    this.router.navigate(['/list-users']);
  }

  listUsers(): any[] {
    return this.usersList;
  }
}
