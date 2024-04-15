import { Inject, Injectable } from '@angular/core';
import { IJobSearchService } from '../../domain/services/IJobSearchService';
import { JobSearchService } from '../../infrastructure/services/JobSearchService';

@Injectable()
export class SearchJobsUseCase {
  constructor(
    @Inject(JobSearchService)
    private jobSearchService: IJobSearchService
  ) {}


  async execute(keywords: string, locationId: string, datePosted: string, sort: string): Promise<any> {
    return await this.jobSearchService.searchJobs(keywords, locationId, datePosted, sort);
  }
}
