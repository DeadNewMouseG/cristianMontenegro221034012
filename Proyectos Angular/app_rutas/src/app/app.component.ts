import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from "./modules/home/views/homepage/homepage.component";
import { AuthPageComponent } from "./modules/auth/views/auth-page/auth-page.component";
import { SidebarPageComponent } from "./modules/sidebar/views/sidebar-page/sidebar-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomepageComponent, AuthPageComponent, SidebarPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app_rutas';
}
