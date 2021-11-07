import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { forkJoin } from 'rxjs';
   
@Injectable()
export class HttpService{
   
    constructor(private http: HttpClient){ }
       
    getUsers(counts:string, sex:string, nationality:string){
        const baseUrl = "https://randomuser.me/api/";
        const options = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return this.http.get(`${baseUrl}?results=${counts}&gender=${sex}&nat=${nationality}`, options);
    }

    getStarWarsInfo(movieNumber:number){
        const baseUrl = `https://swapi.dev/api/films/${movieNumber}/`;
        const options = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return this.http.get(`${baseUrl}`, options);
    }

    getStarWarsChosenData(starData:string[]) {
        const options = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const resultsArray = starData.map((url:string) => this.http.get(`${url}`, options));
        return forkJoin(resultsArray)
    }
}