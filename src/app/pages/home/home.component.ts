import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Quote } from '@shared/interfaces/data.interface';
import { AnimeChanService } from '@shared/services/anime-chan/anime-chan.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  quote!: Quote;
  unsubscribe: Array<any> = [];

  constructor(private animeChan: AnimeChanService) {}

  ngOnInit(): void {
    this.getAnimeQuotes();
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((fn) => fn());
  }

  getAnimeQuotes() {
    this.unsubscribe.push(
      this.animeChan.getNewQuote().subscribe((q) => {
        this.quote = q;
      })
    );
  }
}
