import {Directive, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[sorted]',
  standalone: true
})
export class SortedDirective implements OnInit, OnChanges {

  @HostBinding('class')
  className = 'flex items-center cursor-pointer hover:bg-primary-content/50';

  @Input() size: string = '16';
  @Input() color: string = 'currentColor';
  @Input() viewBox = '0 0 20 20';
  @Input() order: string = 'asc';

  ascIcon: string = "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z";
  descIcon: string = "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z";

  constructor(private elementRef: ElementRef,
              private render: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['order']) {
      this.addOrderSvg();
    }
  }

  ngOnInit(): void {

  }

  addOrderSvg() {

    const childElements = this.elementRef.nativeElement.childNodes;
    for (let child of childElements) {
      if (child.nodeName == 'svg')
        this.render.removeChild(this.elementRef.nativeElement, child);
    }

    const svg = this.render.createElement('svg', 'svg');
    this.render.setAttribute(svg, 'width', this.size);
    this.render.setAttribute(svg, 'height', this.size);
    this.render.setAttribute(svg, 'viewBox', this.viewBox);
    const p1 = this.render.createElement('path', 'svg');
    this.render.setAttribute(p1, 'd', this.getSort(this.order));
    this.render.setAttribute(p1, 'fill', this.color);
    this.render.removeChild(this.elementRef.nativeElement, svg);
    this.render.appendChild(svg, p1);
    this.render.appendChild(this.elementRef.nativeElement, svg);

  }

  getSort(sort: string) {
    return sort == "desc" ? this.ascIcon : this.descIcon;
  }

}
