import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-render-loop-track-by-fn',
  templateUrl: './render-loop-track-by-fn.component.html',
  styleUrls: ['./render-loop-track-by-fn.component.scss'],
})
export class RenderLoopTrackByFnComponent implements OnInit {
  items!: Array<string>;
  constructor() {
    this.items = ['hola', 'mundo'];
  }

  ngOnInit(): void {}

  trackByFn(index: number, value: string) {
    console.log({ index, value });
    return value + index;
  }
}
