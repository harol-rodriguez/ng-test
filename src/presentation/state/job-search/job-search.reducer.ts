import { createReducer, on } from '@ngrx/store';
import { loadJobsSuccess, loadJobsFailure, deleteJob, createJob } from './job-search.actions';

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
  on(loadJobsFailure, (state, { error }) => ({ ...state, error })),
  on(deleteJob, (state: any, { slug }) => {
    const newData = state?.data?.data?.filter((job: any) => job.slug !== slug);
    return { ...state, data: {data: newData} };
  }),
  on(createJob, (state: any, { job }) => {
    const newData = [...state?.data?.data, job];
    return { ...state, data: {data: newData}};
  })
);

