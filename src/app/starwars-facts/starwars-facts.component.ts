import { Component } from '@angular/core';
import { HttpService } from "../../api/http.service";
import { Router } from '@angular/router';
import { StarWarsFilms, StarWarsFilters } from "./StarWarsInterfaces";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-starwars-facts',
  templateUrl: './starwars-facts.component.html',
  styleUrls: ['./starwars-facts.component.scss'],
  providers: [HttpService]
})
export class StarWarsFactsComponent {
  allStarWarsFilms: StarWarsFilms[] = [
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 4,
    },
    {
      value: 5,
    },
    {
      value: 6,
    },
    {
      value: 7,
    },
  ];

  selectedMovie = 0;

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  starWarsInfo$: any;

  currentFilmInfo: any = {
    planets: null,
    starships: null,
    characters: null,
  };


  getStarWarsInfo() {
    this.httpService.getStarWarsInfo(this.selectedMovie)
      .subscribe((data: any) => this.starWarsInfo$ = data)
  }

  getCurrentInfo($event: any) {
    const filterKey = $event.target.dataset.starFilter;
    const chosenFilter = this.starWarsInfo$[filterKey];
    Object.keys(this.currentFilmInfo).forEach((key:string) => {
      if( filterKey === key) {
        this.currentFilmInfo[key] = this.httpService.getStarWarsChosenData(chosenFilter);
      } else {
        this.currentFilmInfo[key] = null;
      }
    });
  }

  navigateToSelectedPage(url:string): void {
    this.router.navigateByUrl(url);
  }
}
