import { Component, OnInit } from '@angular/core';
import { Iactivity } from './activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {

  widgetTitle: string = 'Account Activity';
  // listFilter: string = '';

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredActivity = this.listFilter ? this.performFilter(this.listFilter) : this.accountActivities;
  }

  filteredActivity: Iactivity[];  
  accountActivities: Iactivity[] = [
    {
      id: 1,
      date: '11/02/2019',
      description: 'kroger',
      amount: 45
    },
    {
      id: 2,
      date: '10/26/2019',
      description: 'walmart',
      amount: 145
    },
    {
      id: 3,
      date: '10/24/2019',
      description: 'bestbuy',
      amount: 200
    }
  ];

  constructor() {
    this.filteredActivity = this.accountActivities;
    this.listFilter = '';
  }

  performFilter(filterBy: string): Iactivity[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.accountActivities.filter((activity: Iactivity) => activity.description.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
