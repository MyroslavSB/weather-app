import { Injectable } from '@angular/core';
import {baseIcon, BaseIcon} from "../../base-icons/base-icons";

@Injectable({
  providedIn: 'root'
})
export class BaseIconsRegistryService {
  private registry = new Map();

  public registerIcons(icons: BaseIcon[]): void {
    icons.forEach((icon: BaseIcon) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: baseIcon): string {
    if (!this.registry.has(iconName)) {
      console.warn(
        `We could not find the dinosaur Icon with the name ${iconName}, did you add it to the Icon registry?`,
      );
      return ''
    }
    return this.registry.get(iconName);
  }
}
