import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FieldsComponent } from './components/fields/fields.component';
import { TitleComponent } from './components/title/title.component';
import { LicenceComponent } from './components/licence/licence.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FieldsComponent, TitleComponent, LicenceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practicascpt';
}
