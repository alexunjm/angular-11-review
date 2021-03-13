import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-render-if',
  templateUrl: './render-if.component.html',
  styleUrls: ['./render-if.component.scss'],
})
export class RenderIfComponent implements OnInit {
  show!: boolean;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.show = !this.show;
  }
}
