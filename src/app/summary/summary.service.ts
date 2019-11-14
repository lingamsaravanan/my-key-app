import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISummary } from './summary';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class SummaryService {

  private api_url: string = '/assets/data/summary.json';

  constructor(private httpClient: HttpClient) { }

  public getSummaryData(): Observable<ISummary[]> {
    return this.httpClient.get<ISummary[]>(this.api_url);
  }

}
