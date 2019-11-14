import { Component, OnInit } from '@angular/core';
import { SummaryService } from './summary.service';

@Component({
  // selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  widgetTitle: string = 'Account Summary';

  public summaryData = [];

  constructor(private _summaryService: SummaryService) {}

  ngOnInit() {
    this._summaryService.getSummaryData()
      .subscribe((data: any[]) => {
        console.log(data[0]);
        this.summaryData = data[0]
      });
  }

}
