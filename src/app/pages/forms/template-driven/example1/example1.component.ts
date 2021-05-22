import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../model/user';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss'],
})
export class Example1Component implements OnInit {
  roles = ['SysAdmin', 'Teacher', 'Student'];

  user!: User;

  constructor() {
    this.user = new User('', '', '');
  }

  ngOnInit(): void {}

  login() {
    console.log(this.user);
  }
}
