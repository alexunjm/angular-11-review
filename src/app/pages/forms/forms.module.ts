import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { TemplateDrivenModule } from './template-driven/template-driven.module';
import { ReactiveFormsModule } from './reactive-forms/reactive-forms.module';

@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    TemplateDrivenModule,
    ReactiveFormsModule,
  ],
})
export class FormsModule {}
