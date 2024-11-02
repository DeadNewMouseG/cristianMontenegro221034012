import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-fields',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, CommonModule, PasswordModule, IconFieldModule, InputIconModule],
  templateUrl: './fields.component.html',
  styleUrl: './fields.component.css'
})
export class FieldsComponent {
  userFields: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userFields = this.fb.group({
      nameManager: ['', Validators.required],
      emailManager: ['', Validators.required, Validators.email]
    });
  }

}
