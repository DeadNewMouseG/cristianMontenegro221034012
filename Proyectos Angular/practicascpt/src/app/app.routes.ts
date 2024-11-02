import { Routes } from '@angular/router';
import { FieldsComponent } from './components/fields/fields.component';
import { TitleComponent } from './components/title/title.component';
import { LicenceComponent } from './components/licence/licence.component';

export const routes: Routes = [
    {
        path: 'fields',
        component: FieldsComponent
    },
    {
        path: 'title',
        component: TitleComponent
    },
    {
        path: 'licence',
        component: LicenceComponent
    }
];
