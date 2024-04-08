import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseIconComponent} from "../base-icon/base-icon.component";

@Component({
  selector: 'app-base-loader',
  standalone: true,
  imports: [CommonModule, BaseIconComponent],
  templateUrl: './base-loader.component.html',
  styleUrls: ['./base-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseLoaderComponent {
  @Input() showLoader = false
}
