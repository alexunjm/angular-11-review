import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-render-if-expanded-sintax',
  templateUrl: './render-if-expanded-sintax.component.html',
  styleUrls: ['./render-if-expanded-sintax.component.scss'],
})
export class RenderIfExpandedSintaxComponent implements OnInit {
  show!: boolean;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.show = !this.show;
  }
}
