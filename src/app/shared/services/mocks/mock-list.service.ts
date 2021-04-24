import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockListService {
  constructor() {}

  listOfNumbers() {
    return Array.from({ length: 10 }, (_, index) => {
      return { number: index + 1, text: `éste es el número ${index + 1}` };
    });
  }
}
