import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss'],
})
export class FirstFormComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(6)]],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  updateName() {
    this.firstName?.setValue('Nancy');
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  get firstName(): AbstractControl | null {
    return this.profileForm.get('firstName');
  }
}
