import { Observable } from 'rxjs';

export interface StarWarsFilms {
    value: number,
}

export interface StarWarsFilters {
    planets: Observable<any> | undefined | null,
    starships: Observable<any> | undefined | null,
    characters: Observable<any> | undefined | null,
}