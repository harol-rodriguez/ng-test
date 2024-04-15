import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './presentation/modules/home/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
