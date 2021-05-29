import { Component, OnInit } from '@angular/core';
import { AnimeChanService, Quote } from './services/anime-chan.service';

@Component({
  selector: 'app-my-directives',
  templateUrl: './my-directives.component.html',
  styleUrls: ['./my-directives.component.scss'],
})
export class MyDirectivesComponent implements OnInit {
  quote!: Quote;

  constructor(private animeChanService: AnimeChanService) {}

  ngOnInit(): void {
    this.animeChanService.getNewQuote().subscribe((quote) => {
      this.quote = quote;
    });
  }
}
