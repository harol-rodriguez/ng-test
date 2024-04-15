import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';

import { AppState } from '../../../../state/app.state';
import { createJob } from '../../../../state/job-search/job-search.actions';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent implements OnInit {
  jobForm = new FormGroup({
    title: new FormControl(''),
    created_at: new FormControl(''),
    company_name: new FormControl(''),
    location: new FormControl('')
  });

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  onSubmit() {
    this.store.dispatch(createJob({ job: this.jobForm.value }));
  }
}
