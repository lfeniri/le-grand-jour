import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentationComponent } from './components/presentation/presentation.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PresentationComponent, data: {idElem: 'home'} },
  { path: 'services', component: PresentationComponent, data: {idElem: 'services'} },
  { path: 'prices', component: PresentationComponent, data: {idElem: 'prices'} },
  { path: 'reviews', component: PresentationComponent, data: {idElem: 'reviews'} },
  { path: 'team', component: PresentationComponent, data: {idElem: 'team'} },
  { path: 'contact', component: PresentationComponent, data: {idElem: 'contact'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
