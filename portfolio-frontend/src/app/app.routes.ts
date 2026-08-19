import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {AboutComponent} from './features/about/about.component';
import {ContactComponent} from './features/contact/contact.component';
import {HomeComponent} from './features/home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},

];
