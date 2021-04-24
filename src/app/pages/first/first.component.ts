import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  name: any;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.name = params['name'];
    });
  }

  goToSecond() {
    /* 
      /first/sub-route
      this.router.navigate(['sub-route'], { relativeTo: this.route });
    */
    this.router.navigate(['first'], { queryParams: { name: 'Alex' } });
  }
}
