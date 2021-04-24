import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quote } from '@shared/interfaces/data.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeChanService {
  private allQuotesSubject = new BehaviorSubject<Quote[] | null>(null);
  allQuotes$ = this.allQuotesSubject.asObservable();

  private randomQuotesSubject = new BehaviorSubject<Quote | null>(null);
  quotes$ = this.randomQuotesSubject.asObservable();

  constructor(private http: HttpClient) {}

  getNewQuote(): void {
    this.http
      .get<Quote>('https://animechan.vercel.app/api/random')
      .subscribe((quote: Quote) => {
        this.randomQuotesSubject.next(quote);
        // acumular los quotes que van llegando en otro observable
        const quotesArray = this.allQuotesSubject.value || [];
        this.allQuotesSubject.next([...quotesArray, quote]);
      });
  }
}
