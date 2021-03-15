import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss'],
})
export class FirstFormComponent implements OnInit {
  name = new FormControl('');
  constructor() {}

  ngOnInit(): void {}

  updateName() {
    this.name.setValue('Nancy');
  }
}
