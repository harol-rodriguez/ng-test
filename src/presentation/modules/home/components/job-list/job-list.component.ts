import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadJobs } from '../../../../state/job-search/job-search.actions';
import { AppState } from '../../../../state/app.state';

@Component({
  selector: 'app-job-list',
  standalone: true,
  template: `
    <div *ngFor="let job of jobs$ | async">
      {{ job.title }}
    </div>
  `,
})
export class JobListComponent implements OnInit {
  jobs$ = this.store.select((state: AppState) => state.jobSearch.data);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadJobs({ keywords: 'golang', locationId: '92000000', datePosted: 'anyTime', sort: 'mostRelevant' }));
  }
}
