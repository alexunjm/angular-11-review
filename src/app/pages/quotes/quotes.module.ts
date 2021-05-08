import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesRoutingModule } from './quotes-routing.module';
import { QuotesComponent } from './quotes.component';
import { QuoteMenuModule } from './components/quote-menu/quote-menu.module';

@NgModule({
  declarations: [QuotesComponent],
  imports: [CommonModule, QuotesRoutingModule, QuoteMenuModule],
})
export class QuotesModule {}
