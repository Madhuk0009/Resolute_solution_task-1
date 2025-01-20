User Management Application
This document explains the structure and usage of the User Management application implemented with Angular and Angular Material. The application allows users to be added, edited, deleted, and listed in a table format, complete with search, pagination, and sorting capabilities.
Features
•	Display a list of users in a Material table.
•	Search users by name or email.
•	Add new users.
•	Edit existing users.
•	Delete users with confirmation.
•	Pagination and sorting.
•	"No data found" message when no users are available.
________________________________________
File Structure
user-list.component.ts
This file contains the logic for the User Management feature. It interacts with the UserService to fetch, add, edit, and delete users.
user-list.component.html
Defines the structure and layout of the user table using Angular Material components, including a search bar, table, and action buttons.
user.service.ts
A service to handle API interactions for managing user data. It includes methods for fetching users, adding a user, editing a user, and deleting a user.
________________________________________
Setup
Prerequisites
1.	Node.js and npm installed.
2.	Angular CLI installed (npm install -g @angular/cli).
3.	An API endpoint for user management (replace https://api.example.com/users in UserService with your API URL).

Installation
1.	Clone the repository.
2.	Navigate to the project folder:
cd user-management-app
3.	Install dependencies:
npm install
4.	Run the application:
ng serve
5.	Open the application in your browser at http://localhost:4200.
________________________________________
Key Components and Methods
UserListComponent
•	Displayed Columns: Defines the columns displayed in the Material table (name, email, role, actions).
•	DataSource: The data source for the Material table (MatTableDataSource).
•	Methods:
o	ngOnInit: Loads users on initialization.
o	ngAfterViewInit: Binds paginator and sort to the data source.
o	loadUsers: Fetches the user data from the UserService.
o	applyFilter: Filters users by name or email.
o	addUser: Opens a dialog to add a new user.
o	editUser: Opens a dialog to edit the selected user.
o	deleteUser: Opens a confirmation dialog and deletes the user upon confirmation.
HTML Template (user-list.component.html)
•	Uses Angular Material components:
o	mat-toolbar: Displays the title and an "Add User" button.
o	mat-form-field: Provides a search bar.
o	mat-table: Displays the user list with sorting.
o	mat-paginator: Adds pagination controls.
o	Conditional rendering with *ngIf to display "No data found" when the table is empty.


UserService
•	Methods:
o	getUsers: Fetches the list of users.
o	deleteUser: Deletes a user by ID.
________________________________________
Example API Integration
Replace https://api.example.com/users with your actual API URL. Example implementation:
user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://api.example.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userId}`);
  }
}
________________________________________
Notes
1.	Ensure your API supports CORS for proper interaction with the Angular frontend.
2.	Customize the dialog components (UserFormComponent and ConfirmationDialogComponent) as per your design.
3.	Update filterPredicate in applyFilter if additional fields need to be filtered.


