import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { loadJobs, loadJobsSuccess, loadJobsFailure } from './job-search.actions';

@Injectable()
export class JobEffects {
  loadJobs$ = createEffect(() => this.actions$.pipe(
    ofType(loadJobs),
    mergeMap(() => this.http.get('https://www.arbeitnow.com/api/job-board-api').pipe(
      map(data => loadJobsSuccess({ data })),
      catchError(error => of(loadJobsFailure({ error })))
    ))
  ));

  constructor(private actions$: Actions, private http: HttpClient) {}
}
// // ----- Api dejo de funcionar por limite de llamadas :(
//
// @Injectable()
// export class JobEffects {
//   loadJobs$ = createEffect(() => this.actions$.pipe(
//     ofType(loadJobs),
//     mergeMap(() => this.http.get('https://linkedin-api8.p.rapidapi.com/search-jobs', {
//       params: {
//         keywords: 'golang',
//         locationId: '92000000',
//         datePosted: 'anyTime',
//         sort: 'mostRelevant'
//       },
//       headers: {
//         'X-RapidAPI-Key': '0bff3340c8mshd01e3f41fe6b144p16faf6jsn62e9e01186bc',
//         'X-RapidAPI-Host': 'linkedin-api8.p.rapidapi.com'
//       }
//     }).pipe(
//       map(data => loadJobsSuccess({ data })),
//       catchError(error => of(loadJobsFailure({ error })))
//     ))
//   ));

//   constructor(private actions$: Actions, private http: HttpClient) {}
// }
