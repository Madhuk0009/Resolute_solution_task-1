import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm!: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.isEditMode = this.data.isEditMode;
    const user = this.data.user || { name: '', email: '', role: '' };

    this.userForm = this.fb.group({
      id: [user.id || null],
      name: [user.name, [Validators.required]],
      email: [user.email, [Validators.required, Validators.email]],
      role: [user.role, [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const user = this.userForm.value;

      if (this.isEditMode) {
        this.userService.updateUser(user);
      } else {
        this.userService.addUser(user);
      }

      this.dialogRef.close(true);
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }


}
