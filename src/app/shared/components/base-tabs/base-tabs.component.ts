import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {INavTab} from "../../interfaces/i-nav-tab";

@Component({
  selector: 'app-base-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-tabs.component.html',
  styleUrls: ['./base-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseTabsComponent<ValueType> {
  @Input() tabsConfig: INavTab<ValueType>[] = []
  @Input() activeTab: INavTab<ValueType>

  @Output() tabPick: EventEmitter<INavTab<ValueType>> = new EventEmitter<INavTab<ValueType>>()
}
