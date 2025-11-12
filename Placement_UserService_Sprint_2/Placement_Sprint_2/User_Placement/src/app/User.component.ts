import { Component, OnInit } from '@angular/core';
import { UserService } from './User.service';

interface User {
  id: number | null;
  name: string;
  type: string;
  password: string;
}

@Component({
  selector: 'app-user-root',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.scss']
})
export class UserComponent implements OnInit {
  title = 'Users';
  users: User[] = [];
  newUser: User = { id: null, name: '', type: '', password: '' };
  userToUpdate: User = { id: null, name: '', type: '', password: '' };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  register(): void {
    console.log('Registering user:', this.newUser);
    if (!this.newUser.name || !this.newUser.type || !this.newUser.password) {
      alert('All fields are required.');
      return;
    }
    this.userService.registerPlacement(this.newUser).subscribe(
      () => {
        this.getUsers();
        this.newUser = { id: null, name: '', type: '', password: '' };
      },
      error => alert('Error registering user')
    );
  }

  getUsers(): void {
    this.userService.getPlacements().subscribe(
      (response: User[]) => {
        console.log(response)
        this.users = response;
      },
      error => console.log(error)
    );
  }

  deleteUser(user: User): void {
    if (!user.id) return;
    this.userService.deletePlacement(user.id).subscribe(
      () => this.getUsers(),
      error => alert('Error deleting user')
    );
  }

 edit(user:User):void{
   this.userToUpdate = user;
   this.newUser = user;
}

  updateUser(): void {
    if (!this.userToUpdate.id) {
      alert('ID is missing.');
      return;
    }
    this.userService.updatePlacement(this.userToUpdate).subscribe(
      () => {
        this.getUsers();
        this.userToUpdate = { id: null, name: '', type: '', password: '' };
      },
      error => alert('Error updating user')
    );
  }
}
