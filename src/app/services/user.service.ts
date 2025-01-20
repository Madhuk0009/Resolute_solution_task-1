import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private storageKey = 'users';

  constructor() {}

  getUsers(): any[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  addUser(user: any) {
    const users = this.getUsers();
    users.push({ ...user, id: new Date().getTime() });
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  updateUser(updatedUser: any) {
    const users = this.getUsers().map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  deleteUser(id: number) {
    const users = this.getUsers().filter((user) => user.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

}
