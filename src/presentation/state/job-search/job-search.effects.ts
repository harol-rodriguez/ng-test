// src/presentation/state/job-search/job-search.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of, from } from 'rxjs'; // Importa 'from' de rxjs

import { loadJobs, loadJobsSuccess, loadJobsFailure } from './job-search.actions';
import { SearchJobsUseCase } from '../../../application/use_cases/SearchJobsUseCase';

@Injectable()
export class JobSearchEffects {
  loadJobs$ = createEffect(() => this.actions$.pipe(
    ofType(loadJobs),
    mergeMap(action => from(this.searchJobsUseCase.execute(action.keywords, action.locationId, action.datePosted, action.sort))
      .pipe(
        map(data => loadJobsSuccess({ data })),
        catchError(error => of(loadJobsFailure({ error })))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private searchJobsUseCase: SearchJobsUseCase
  ) {}
}
