import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tree-m',
  templateUrl: './tree-m.component.html',
  styleUrls: ['./tree-m.component.scss'],
})
export class TreeMComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  goToALeaf() {
    this.router.navigate(['leaf'], { relativeTo: this.route });
  }
}
