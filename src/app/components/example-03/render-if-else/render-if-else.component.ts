import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-render-if-else',
  templateUrl: './render-if-else.component.html',
  styleUrls: ['./render-if-else.component.scss'],
})
export class RenderIfElseComponent implements OnInit {
  loading: boolean = true;
  constructor() {}

  ngOnInit(): void {
    setTimeout(
      (thisComponent: RenderIfElseComponent) => {
        thisComponent.loading = false;
      },
      2500,
      this
    );
  }
}
