import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-render-if-then-template',
  templateUrl: './render-if-then-template.component.html',
  styleUrls: ['./render-if-then-template.component.scss'],
})
export class RenderIfThenTemplateComponent implements OnInit {
  thenBlock: TemplateRef<any> | null = null;
  show = true;

  @ViewChild('primaryBlock', { static: true })
  primaryBlock: TemplateRef<any> | null = null;
  @ViewChild('secondaryBlock', { static: true })
  secondaryBlock: TemplateRef<any> | null = null;

  switchPrimary() {
    this.thenBlock =
      this.thenBlock === this.primaryBlock
        ? this.secondaryBlock
        : this.primaryBlock;
  }

  ngOnInit() {
    this.thenBlock = this.primaryBlock;
  }
}
