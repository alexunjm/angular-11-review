import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnimeChanService, Quote } from './services/anime-chan.service';

@Component({
  selector: 'app-my-directives',
  templateUrl: './my-directives.component.html',
  styleUrls: ['./my-directives.component.scss'],
})
export class MyDirectivesComponent implements OnInit, OnDestroy {
  quote!: Quote;
  newRandomQuoteSubscription!: Subscription;

  constructor(private animeChanService: AnimeChanService) {}

  ngOnInit(): void {
    this.newRandomQuoteSubscription = this.animeChanService
      .getNewQuote()
      .subscribe((quote) => {
        this.quote = quote;
      });
  }

  ngOnDestroy(): void {
    if (this.newRandomQuoteSubscription) {
      this.newRandomQuoteSubscription.unsubscribe();
    }
  }
}
