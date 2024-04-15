import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-output-area',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './output-area.component.html',
  styleUrl: './output-area.component.scss'
})
export class OutputAreaComponent {
  @Input() outputText: string = '';
}
