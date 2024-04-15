import { IJobSearchService } from '../../domain/services/IJobSearchService';

export class SearchJobsUseCase {
  private jobSearchService: IJobSearchService;

  constructor(jobSearchService: IJobSearchService) {
    this.jobSearchService = jobSearchService;
  }

  async execute(keywords: string, locationId: string, datePosted: string, sort: string): Promise<any> {
    return await this.jobSearchService.searchJobs(keywords, locationId, datePosted, sort);
  }
}
