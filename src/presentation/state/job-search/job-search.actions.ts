import { createAction, props } from '@ngrx/store';

export const loadJobs = createAction('[Job] Load Jobs');
export const loadJobsSuccess = createAction('[Job] Load Jobs Success', props<{ data: any }>());
export const loadJobsFailure = createAction('[Job] Load Jobs Failure', props<{ error: any }>());
export const deleteJob = createAction('[Job] Delete Job', props<{ slug: string }>());
export const createJob = createAction('[Job] Create Job', props<{ job: any }>());
