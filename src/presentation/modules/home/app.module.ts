import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { InputAreaComponent } from './components/input-area/input-area.component';

import { SearchJobsUseCase } from '../../../application/use_cases/SearchJobsUseCase';
import { JobSearchService } from '../../../infrastructure/services/JobSearchService';
import { JobEffects } from '../../state/job-search/job-search.effects';
import { jobReducer } from '../../state/job-search/job-search.reducer';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';
import { JobListComponent } from './components/job-list/job-list.component';
import { CreateJobComponent } from './components/create-job/create-job.component';
@NgModule({
  declarations: [
    AppComponent,
    InputAreaComponent,
    JobListComponent,
    CreateJobComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    StoreModule.forRoot({ jobSearch: jobReducer }),
    EffectsModule.forRoot([JobEffects]),
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    SearchJobsUseCase,
    JobSearchService,
    { provide: 'API_KEY', useValue: '0bff3340c8mshd01e3f41fe6b144p16faf6jsn62e9e01186bc' },
    { provide: 'API_HOST', useValue: 'linkedin-api8.p.rapidapi.com' },
    provideAnimationsAsync(),
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
