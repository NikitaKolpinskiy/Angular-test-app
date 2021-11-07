import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { MeetingPageComponent } from './meeting-page/meeting-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { StarWarsFactsComponent } from './starwars-facts/starwars-facts.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    MainPageComponent,
    MeetingPageComponent,
    StarWarsFactsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
