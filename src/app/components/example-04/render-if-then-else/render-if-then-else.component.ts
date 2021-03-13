import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-render-if-then-else',
  templateUrl: './render-if-then-else.component.html',
  styleUrls: ['./render-if-then-else.component.scss'],
})
export class RenderIfThenElseComponent implements OnInit {
  show!: boolean;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.show = !this.show;
  }
}
