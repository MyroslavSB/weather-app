import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {baseIcon} from "../../../../base-icons/base-icons";
import {BaseIconComponent} from "../base-icon/base-icon.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss'],
  imports: [
    BaseIconComponent,
    CommonModule,
    ReactiveFormsModule
  ],
  standalone: true
})
export class BaseInputComponent {

  @ViewChild('inputElement') inputEL: ElementRef
  @Input() placeholder: string = '';
  @Input({required: true}) control: FormControl;
  @Input() isPassword: boolean = false;
  @Input() error: boolean;
  @Input() disabledInput: boolean = false;
  @Input() mask: string;
  @Input() prefix: string = '';
  @Input() inputStyle: any = {}
  @Input() smallInput: boolean = false
  @Input() inputMaxLength: number = null
  @Input() searchInput: boolean = false
  @Input() rightIcon: baseIcon = null
  @Input() leftIcon: baseIcon = null
  @Input() focusEmitter: EventEmitter<void>

  @Output() enterClicked: EventEmitter<void> = new EventEmitter<void>()
  @Output() rightIconClicked: EventEmitter<void> = new EventEmitter<void>()
  @Output() leftIconClicked: EventEmitter<void> = new EventEmitter<void>()


  public onEnterPress(): void {
    this.enterClicked.emit()
  }

  public onRightIconClick(): void {
    this.rightIconClicked.emit()
  }

  public onLeftIconClick(): void {
    this.leftIconClicked.emit()
  }

  public get rightPadding(): string {
    return this.rightIcon ? '47px' : '12px'
  }

  public get leftPadding(): string {
    return this.leftIcon ? '42' : '15'
  }

}
