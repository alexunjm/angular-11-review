import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightText]',
})
export class HighlightTextDirective implements OnInit {
  constructor(private _element: ElementRef) {
    console.log({ constructor: 'hi!', _element });
  }

  ngOnInit(): void {
    console.log({ ngOnInit: 'hi!', element: this._element });
    const styleRef: CSSStyleDeclaration = this._element.nativeElement.style;
    styleRef.color = '#8000aa';
    styleRef.backgroundColor = '#80ff50';
    console.log({ styleRef, len: styleRef.length });
    for (let i = 0; i < styleRef.length; i++) {
      const style: number = styleRef[i] as unknown as number; // trick for access style with ts
      console.log({ i, style, [style]: styleRef[style] });
    }
  }
}
