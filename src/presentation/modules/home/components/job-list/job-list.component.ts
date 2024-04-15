import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadJobs } from '../../../../state/job-search/job-search.actions';
import { AppState } from '../../../../state/app.state';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  jobs$: Observable<any> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadJobs());
    this.jobs$ = this.store.select(state => state.jobSearch.data);
    this.jobs$.subscribe(jobs => {
      console.log(jobs?.data);
    });
  }
}
