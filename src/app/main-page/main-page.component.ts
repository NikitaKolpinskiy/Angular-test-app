import { UserCounts, UserNationality } from './MainInterfaces';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../api/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: [HttpService]
})
export class MainPageComponent {
  female = "female";
  male = "male";
  isCardView = true;

  allUserCounts: UserCounts[] = [
    {
      value: 5,
      viewValue: "5 users",
    },
    {
      value: 10,
      viewValue: "10 users",
    },
    {
      value: 15,
      viewValue: "15 users",
    },
    {
      value: 20,
      viewValue: "20 users",
    },
  ];

  allNations: UserNationality[] = [
    {
      value: "AU",
      viewValue: "Australia",
    },
    {
      value: "BR",
      viewValue: "Brazil",
    },
    {
      value: "CA",
      viewValue: "Canada",
    },
    {
      value: "CH",
      viewValue: "Switzerland",
    },
    {
      value: "DE",
      viewValue: "Germany",
    },
    {
      value: "DK",
      viewValue: "Denmark",
    },
    {
      value: "FR",
      viewValue: "France",
    },
    {
      value: "GB",
      viewValue: "United Kingdom",
    },
  ];

  selectedUserCounts = "";
  selectedSex = "";
  selectedNationality = "";
  users$: any;

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  routeToPage(url:string): void {
    this.router.navigateByUrl(url);
  }

  makeRequest() {
    this.httpService.getUsers(this.selectedUserCounts, this.selectedSex, this.selectedNationality)
      .subscribe((data: any) => this.users$ = data.results)
  }

  setTableView() {
    this.isCardView = false;
  }

  setCardView() {
    this.isCardView = true;
  }
}
