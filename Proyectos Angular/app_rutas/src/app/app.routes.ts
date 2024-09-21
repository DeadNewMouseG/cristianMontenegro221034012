import { Routes } from '@angular/router';
import { HomepageComponent } from './modules/home/views/homepage/homepage.component';
import { AuthPageComponent } from './modules/auth/views/auth-page/auth-page.component';
import { SidebarPageComponent } from './modules/sidebar/views/sidebar-page/sidebar-page.component';
import { SidetopPageComponent } from './modules/sidetop/views/sidetop-page/sidetop-page.component';

export const routes: Routes = [
    {
        path:'',
        component:HomepageComponent
    },
    {
        path:'auth',
        component:AuthPageComponent
    },
    {
        path:'sidebar',
        component:SidebarPageComponent
    }
];
