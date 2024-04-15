import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputAreaComponent } from './components/input-area/input-area.component';

import { OutputAreaComponent } from './components/output-area/output-area.component';
import { JobListComponent } from './components/job-list/job-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, InputAreaComponent, OutputAreaComponent, JobListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-test';
  inputText: string = '';
  outputText: string = '';

  translateText() {
    this.outputText = this.inputText;
  }
}
