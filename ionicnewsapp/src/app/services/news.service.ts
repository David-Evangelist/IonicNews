import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface Source {
  id: string | null;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiKey = '8fdaf4959ada4b6e82d9512f67e54974';

  constructor(private http: HttpClient) {}

 getAppleNews(): Observable<NewsApiResponse> {
  const url = `https://newsapi.org/v2/everything?q=apple&sortBy=popularity&language=pt&apiKey=${this.apiKey}`;
  return this.http.get<NewsApiResponse>(url);
}

}
