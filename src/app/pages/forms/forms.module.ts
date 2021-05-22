import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { TemplateDrivenModule } from './template-driven/template-driven.module';

@NgModule({
  declarations: [FormsComponent],
  imports: [CommonModule, FormsRoutingModule, TemplateDrivenModule],
})
export class FormsModule {}
