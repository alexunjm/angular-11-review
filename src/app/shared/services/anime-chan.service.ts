import { Injectable } from '@angular/core';
import { Quote } from '@shared/interfaces/data.interface';
import { BehaviorSubject, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeChanService {
  private randomQuotesSubject = new BehaviorSubject<Quote | null>(null);
  quotes$: Observable<Quote | null>;

  constructor() {
    this.quotes$ = this.randomQuotesSubject.asObservable();
  }

  getNewQuote(): void {
    // const data = from(fetch('/api/endpoint'))
    fetch('https://animechan.vercel.app/api/random')
      .then((response) => response.json())
      .then((quote) => this.randomQuotesSubject.next(quote));
  }
}
