import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appOuterClick]',
  standalone: true
})
export class OuterClickDirective {
  @Input() noTriggerElements: HTMLElement[] = [];
  @Output() outerClick = new EventEmitter<boolean>();
  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener('document:mousedown', ['$event'])
  public onClick(event: MouseEvent): void {
    const ev = event as any;
    const noTriggers: HTMLElement[] = this.noTriggerElements.filter(el => el.contains(ev.target))
    const isContains: boolean = !!(this.elementRef.nativeElement.contains(event.target)) ||  ( this.noTriggerElements && noTriggers.length>0 );
    this.outerClick.emit(isContains);
  }
}
