import { createAction, props } from '@ngrx/store';

export const loadJobs = createAction(
  '[Job Search] Load Jobs',
  props<{ keywords: string, locationId: string, datePosted: string, sort: string }>()
);

export const loadJobsSuccess = createAction(
  '[Job Search] Load Jobs Success',
  props<{ data: any }>()
);

export const loadJobsFailure = createAction(
  '[Job Search] Load Jobs Failure',
  props<{ error: any }>()
);
