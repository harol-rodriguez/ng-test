import { createReducer, on } from '@ngrx/store';
import { loadJobsSuccess, loadJobsFailure } from './job-search.actions';

export interface State {
  data: any;
  error: any;
}

export interface JobSearchState {
  data: any;
  jobSearch: State;
}

export const initialState = { data: null, error: null };

export const jobReducer = createReducer(
  initialState,
  on(loadJobsSuccess, (state, { data }) => ({ ...state, data })),
  on(loadJobsFailure, (state, { error }) => ({ ...state, error }))
);

