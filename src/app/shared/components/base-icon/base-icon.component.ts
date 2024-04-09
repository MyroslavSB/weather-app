import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  Optional,
  SimpleChanges
} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import {BaseIconsRegistryService} from "../../../services/base-icons-registry.service";
import {baseIcon} from "../../../../base-icons/base-icons";
import {Params} from "@angular/router";

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
export class BaseIconComponent implements OnChanges {
  private svgIcon: SVGElement | undefined;

  @Input() iconStyles: Params = {}
  @Input() iconClasses: string[] = []

  constructor(
    @Optional() @Inject(DOCUMENT) private document: Document,
    public element: ElementRef,
    private epIconsService: BaseIconsRegistryService,
  ) {
  }

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

  ngOnChanges(changes: SimpleChanges) {
    if (!this.svgIcon) {
      return
    }

    if (this.iconClasses) {
      this.setIconClasses()
    }

    if (this.iconStyles) {
      this.setIconStyleProperties(this.iconStyles)

    }
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return (
      div.querySelector('svg') ||
      this.document.createElementNS('http://www.w3.org/2000/svg', 'path')
    );
  }

  private setIconStyleProperties(styles: Params): void {
    Object.keys(styles).forEach(property => {
      this.svgIcon?.style.setProperty(property, styles[property]);
    });
  }

  private setIconClasses(): void {
    if (this.svgIcon) {
      const className = this.iconClasses.join(' ')
      this.svgIcon.setAttribute('class', className)

      this.element.nativeElement.appendChild(this.svgIcon)
    }
  }

}
