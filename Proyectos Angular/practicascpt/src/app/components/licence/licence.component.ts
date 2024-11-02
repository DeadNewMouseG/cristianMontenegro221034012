import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimateModule } from 'primeng/animate';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-licence',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, InputTextModule, CalendarModule, ButtonModule, InputTextareaModule],
  templateUrl: './licence.component.html',
  styleUrl: './licence.component.css'
})
export class LicenceComponent {
  licenceForm: FormGroup;
  date: Date | undefined;
  date2: Date | undefined;

  constructor(private fb: FormBuilder){
    this.licenceForm = this.fb.group({
      startdate: ['', Validators.required],
      enddate: ['', Validators.required],
      note: ['', Validators.required]

    });
  }
}
