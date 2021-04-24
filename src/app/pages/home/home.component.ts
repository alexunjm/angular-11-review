import { Component, OnInit } from '@angular/core';
import { Quote } from '@shared/interfaces/data.interface';
import { AnimeChanService } from '@shared/services/anime-chan/anime-chan.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allQuotes$: Observable<Quote[] | null>;
  quote$: Observable<Quote | null>;

  constructor(private animeChan: AnimeChanService) {
    this.quote$ = animeChan.quotes$;
    this.allQuotes$ = animeChan.allQuotes$;
  }

  ngOnInit(): void {}

  getAnimeQuotes() {
    this.animeChan.getNewQuote();
  }
}
