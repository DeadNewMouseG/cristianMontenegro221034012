import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, FormBuilder],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = this.fb.group;
  
constructor(private fb: FormBuilder){}

}
