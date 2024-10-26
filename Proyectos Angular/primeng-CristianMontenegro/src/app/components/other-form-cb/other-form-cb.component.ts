import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextarea, InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-other-form-cb',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CheckboxModule, ButtonModule, InputTextareaModule, RadioButtonModule],
  templateUrl: './other-form-cb.component.html',
  styleUrl: './other-form-cb.component.css'
})
export class OtherFormCbComponent {


  opciones: {label: string; value: string}[] = [
    {label: 'opcion1', value: 'opcion1'},
    {label: 'opcion2', value: 'opcion2'},
    {label: 'opcion3', value: 'opcion3'}
  ];

  opcionesrb: {label: string; value: string} [] = [
    {label: 'opcion A', value: 'opcion A'},
    {label: 'opcion B', value: 'opcion B'},
    {label: 'opcion C', value: 'opcion C'}
  ];

  checkboxForm: FormGroup;
  radiobuttonForm: FormGroup;

  constructor(private liz: FormBuilder) {
    this.checkboxForm = this.liz.group ({
      seleccion: [[]]
    });
    this.radiobuttonForm = this.liz.group({
      seleccion: ['']
    });
  }

  onSubmit() {
    console.log(this.checkboxForm.value);
    console.log(this.radiobuttonForm.value);
  }

}
