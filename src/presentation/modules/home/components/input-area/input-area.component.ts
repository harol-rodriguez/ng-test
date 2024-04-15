import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-area',
  standalone: true,
  imports: [FormsModule],
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
