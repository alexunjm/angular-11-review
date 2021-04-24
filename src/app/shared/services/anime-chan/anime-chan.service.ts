import { Injectable } from '@angular/core';
import { Quote } from '@shared/interfaces/data.interface';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AnimeChanService {
  constructor() {}

  getNewQuote(): Observable<Quote> {
    const data = from(fetch('https://animechan.vercel.app/api/random'));

    return data.pipe(
      switchMap((response) => {
        return response.json();
      })
    );
  }
}
