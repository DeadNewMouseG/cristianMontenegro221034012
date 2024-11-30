import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CardModule, InputTextModule, PasswordModule, FormsModule, ButtonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService){ //LoginService es el servicio que creamos
    this.registerForm = this.fb.group({
      fullname: ['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      confirm: ['', Validators.required]
    });
  }


  onSubmit(): void {
    if (this.registerForm.valid) {
      const { username, password } = this.registerForm.value;
      this.loginService.register(username, password).subscribe({
        next: response => {
          console.log('Usuario registrado exitosamente', response);
        },
        error: error => {
          console.error('Error en el registro del usuario', error);
        },
        complete: () => {
          console.log('Proceso de registro completado');
        }
      });
    }
  }
}
