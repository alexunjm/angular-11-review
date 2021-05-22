import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './form-example-routing.module';
import { FormExampleComponent } from './form-example.component';
import { TemplateDrivenModule } from './template-driven/template-driven.module';
import { ReactiveFormsModule } from './reactive-forms/reactive-forms.module';

@NgModule({
  declarations: [FormExampleComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    TemplateDrivenModule,
    ReactiveFormsModule,
  ],
})
export class FormExampleModule {}
