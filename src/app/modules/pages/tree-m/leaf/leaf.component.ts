import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  template: "<div>it's a leaf</div>",
})
export class LeafComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  goToALeaf() {
    this.router.navigate(['leaf'], { relativeTo: this.route });
  }
}
