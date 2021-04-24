import { Component, OnInit } from '@angular/core';
import { MockListService } from '@mocks/mock-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedNumber = 0;
  someList: { number: number; text: string }[] = [];
  constructor(private mock: MockListService) {}

  ngOnInit(): void {
    this.someList = this.mock.listOfNumbers();
  }
}
