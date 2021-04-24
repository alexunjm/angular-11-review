import { Injectable } from '@angular/core';
import { Quote } from '@shared/interfaces/data.interface';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AnimeChanService {
  private allQuotesSubject = new BehaviorSubject<Quote[] | null>(null);
  allQuotes$: Observable<Quote[] | null>;

  private randomQuotesSubject = new BehaviorSubject<Quote | null>(null);
  quotes$: Observable<Quote | null>;

  constructor() {
    this.quotes$ = this.randomQuotesSubject.asObservable();
    this.allQuotes$ = this.allQuotesSubject.asObservable();
  }

  getNewQuote(): void {
    const data = from(fetch('https://animechan.vercel.app/api/random'));

    data
      .pipe(
        switchMap((response) => {
          return response.json();
        })
      )
      .subscribe((quote) => {
        this.randomQuotesSubject.next(quote);
        // acumular los quotes que van llegando en otro observable
        const quotesArray = this.allQuotesSubject.value || [];
        this.allQuotesSubject.next([...quotesArray, quote]);
      });
  }
}
