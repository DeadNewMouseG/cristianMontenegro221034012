import { Component } from '@angular/core';
import { AuthPageComponent } from '../../../auth/views/auth-page/auth-page.component';
import { SidebarPageComponent } from '../../../sidebar/views/sidebar-page/sidebar-page.component';
import { SidetopPageComponent } from "../../../sidetop/views/sidetop-page/sidetop-page.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [AuthPageComponent, SidebarPageComponent, SidetopPageComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
