import {ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Optional} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import {BaseIconsRegistryService} from "../../services/base-icons-registry.service";
import {baseIcon, BaseIcon} from "../../../base-icons/base-icons";

@Component({
  selector: 'app-base-icon',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  styles: [
    ':host::ng-deep svg{display: flex; justify-content: center; align-items: center}',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseIconComponent {
  private svgIcon: SVGElement | undefined;

  constructor(
    @Optional() @Inject(DOCUMENT) private document: Document,
    public element: ElementRef,
    private epIconsService: BaseIconsRegistryService,
  ) {}

  @Input()
  set name(iconName: baseIcon) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.epIconsService.getIcon(iconName);

    if (!svgData) {
      return;
    }

    this.svgIcon = this.svgElementFromString(svgData);
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return (
      div.querySelector('svg') ||
      this.document.createElementNS('http://www.w3.org/2000/svg', 'path')
    );
  }
}
