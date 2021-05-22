import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example1Component } from './example1/example1.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Example1Component],
  imports: [CommonModule, FormsModule],
  exports: [Example1Component],
})
export class TemplateDrivenModule {}
