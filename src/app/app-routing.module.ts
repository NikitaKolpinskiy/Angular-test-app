import { MeetingPageComponent } from './meeting-page/meeting-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { StarWarsFactsComponent } from './starwars-facts/starwars-facts.component';

const routes: Routes = [
  { path: '', redirectTo: '/init', pathMatch: 'full' },
  { path: 'init', component: MeetingPageComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'star-wars', component: StarWarsFactsComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
