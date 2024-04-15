import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './presentation/modules/home/app.component';
import { appConfig } from './presentation/core/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
