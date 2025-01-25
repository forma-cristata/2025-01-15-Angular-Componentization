import { Routes } from '@angular/router';
import {AboutViewComponent} from './about-view/about-view.component';
import {ClassesViewComponent} from './classes-view/classes-view.component';
import {ContactViewComponent} from './contact-view/contact-view.component';
import {IndexViewComponent} from './index-view/index-view.component';
import {ShowsViewComponent} from './shows-view/shows-view.component';
import {TrainingsViewComponent} from './trainings-view/trainings-view.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: IndexViewComponent},
  {path: 'about', component: AboutViewComponent},
  {path: 'classes', component: ClassesViewComponent},
  {path: 'contact', component: ContactViewComponent},
  {path: 'shows', component: ShowsViewComponent},
  {path: 'trainings', component: TrainingsViewComponent}
];
