import {
  Component, ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output, TemplateRef, TrackByFunction,
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
export class BaseInputComponent<AutoCompleteTypes> {

  @ContentChild(TemplateRef) autoCompleteItemTemplate: TemplateRef<any>
  @ViewChild('inputElement') inputEL: ElementRef


  @Input() placeholder: string = '';
  @Input({required: true}) control: FormControl;
  @Input() isPassword: boolean = false;
  @Input() error: boolean;
  @Input() disabledInput: boolean = false;
  @Input() prefix: string = '';
  @Input() inputStyle: any = {}
  @Input() searchInput: boolean = false
  @Input() rightIcon: baseIcon = null
  @Input() leftIcon: baseIcon = null
  @Input() focusEmitter: EventEmitter<void>
  @Input() autoCompleteItems: AutoCompleteTypes[] = []

  @Output() enterClicked: EventEmitter<void> = new EventEmitter<void>()
  @Output() rightIconClicked: EventEmitter<void> = new EventEmitter<void>()
  @Output() leftIconClicked: EventEmitter<void> = new EventEmitter<void>()
  @Output() autoCompleteScrolled: EventEmitter<void> = new EventEmitter<void>()
  @Output() autoCompleteItemPicked: EventEmitter<AutoCompleteTypes> = new EventEmitter<AutoCompleteTypes>()

  public onEnterPress(): void {
    this.enterClicked.emit()
  }

  public onRightIconClick(): void {
    this.rightIconClicked.emit()
  }

  public onLeftIconClick(): void {
    this.leftIconClicked.emit()
  }

  public trackAutoComplete: TrackByFunction<string> = (index, item) => {
    return item
  }

  public onAutoCompleteItemClick(auto_item: AutoCompleteTypes): void {
    this.autoCompleteItemPicked.emit(auto_item)
  }

  public get showAutoComplete(): boolean {
    return this.autoCompleteItems.length > 0
  }

  public get rightPadding(): string {
    return this.rightIcon ? '47px' : '12px'
  }

  public get leftPadding(): string {
    return this.leftIcon ? '42' : '15'
  }
}
