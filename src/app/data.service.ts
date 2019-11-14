import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Inews } from '../app/news/news';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private api_url = 'https://gnews.io/api/v3/top-news?token=4c942f322a23b9f8e92a0f555672c37d';

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest() {
    return this.httpClient.get(this.api_url);
  }

}
