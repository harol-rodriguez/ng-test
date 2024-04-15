import { createReducer, on } from '@ngrx/store';
import { loadJobs, loadJobsSuccess, loadJobsFailure } from './job-search.actions';

export const jobSearchFeatureKey = 'jobSearch';

export interface State {
  data: any;
  error: any;
}

export interface JobSearchState {
  data: any;
  jobSearch: State;
}

export const initialState: State = {
  data: null,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(loadJobsSuccess, (state, action) => ({ ...state, data: action.data })),
  on(loadJobsFailure, (state, action) => ({ ...state, error: action.error }))
);

