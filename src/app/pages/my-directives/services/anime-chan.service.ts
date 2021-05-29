import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeChanService {
  constructor(private http: HttpClient) {}

  getNewQuote(): Observable<Quote> {
    return this.http.get<Quote>('https://animechan.vercel.app/api/random');
  }
}

export type Quote = {
  anime: string;
  character: string;
  quote: string;
};
