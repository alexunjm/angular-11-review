import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FirstFormComponent } from './components/first-form/first-form.component';

@NgModule({
  declarations: [FirstFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FirstFormComponent],
})
export class MyReactiveFormsModule {}
