import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss'],
})
export class Example1Component implements OnInit {
  roles = ['SysAdmin', 'Teacher', 'Student'];

  user!: User;

  constructor() {}

  ngOnInit(): void {}
}
