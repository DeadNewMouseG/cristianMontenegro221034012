import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { OtherFormCbComponent } from '../other-form-cb/other-form-cb.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, OtherFormCbComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
