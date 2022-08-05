import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  getArticles(query:any) {
    return this.http.get(`${baseUrl}/article/${query}`);
  }

}
