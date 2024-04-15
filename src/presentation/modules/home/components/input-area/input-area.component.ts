import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrl: './input-area.component.scss'
})
export class InputAreaComponent {
  @Output() textChange = new EventEmitter<string>();
  inputText: string = '';

  onTextChange() {
    this.textChange.emit(this.inputText);
  }
}
