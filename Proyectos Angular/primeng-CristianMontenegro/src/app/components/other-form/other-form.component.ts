import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-other-form',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownModule, CalendarModule, ButtonModule, CommonModule, InputTextModule],
  templateUrl: './other-form.component.html',
  styleUrl: './other-form.component.css'
})
export class OtherFormComponent {
  otherForm: FormGroup;

  cities: any[] = [{label: 'New York', value:'NY'}, {label: 'London', value: 'LDN'}, {label: 'Paris', value: 'PRS'}];
  constructor(private liz: FormBuilder, private amour: Router) {
    this.otherForm = this.liz.group({
      name: ['', Validators.required],
      birthdate: ['', Validators.required],
      city: [null, Validators.required]
    });
  }

  onSubmit() {
    if(this.otherForm.valid) {
      console.log(this.otherForm.value);
      this.amour.navigate(['/login-test']);
    } else {
      console.log('Formulario no valido')
    }
  }

}
