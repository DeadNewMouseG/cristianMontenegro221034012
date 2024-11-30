import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [ReactiveFormsModule,
            InputTextModule,
            PasswordModule,
            CommonModule,
            ButtonModule,
            HttpClientModule,
            MessageModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  updateForm: FormGroup;
  deleteForm: FormGroup;

  successMesage: string = '';
  errorMesage: string = '';

  constructor(private fb: FormBuilder, private LoginService: LoginService) {
    this.updateForm = this.fb.group({
      userId: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.deleteForm = this.fb.group({
      userId: ['', Validators.required]
    });
  }

  onUpdate(): void {
    if (this.updateForm.valid) {
      const {userId, username, password} = this.updateForm.value;
      this.LoginService.updateUser(userId, username,password).subscribe({
        next: () => { //Se podria trabajar con if nestados
          this.successMesage = 'Usuario actualizado con exito';
          this.errorMesage = '';
          this.updateForm.reset()
        },
        error: () => {
          this.errorMesage = 'Error al actualizar el usuario';
          this.successMesage = '';
        },
        complete: () => console.log('Proceso de actualizacion completo')
      });
    }
  }

  onDelete(): void {
    if (this.deleteForm.valid) {
      const {userId} = this.deleteForm.value;
      this.LoginService.deleteUser(userId).subscribe({
        next: () => { //Se podria trabajar con if nestados
          this.successMesage = 'Usuario actualizado con exito';
          this.errorMesage = '';
          this.updateForm.reset()
        },
        error: () => {
          this.errorMesage = 'Error al actualizar el usuario';
          this.successMesage = '';
        },
        complete: () => console.log('Proceso de actualizacion completo')
      });
    }
  }

}
