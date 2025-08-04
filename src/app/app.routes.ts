import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Portifolio } from './portifolio/portifolio';
import { Contact } from './contact/contact';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
     { path: 'home', component: Home, title: 'Home' },// title --->Title page Name
  { path: 'about', component: About, title: 'About' },
  { path: 'portifolio', component: Portifolio, title: 'portifolio' },
{ path: 'contact', component: Contact, title: 'contact' },
  { path: '**', component: Notfound, title: 'notfound' }
];
