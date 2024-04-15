export interface IJobSearchService {
  searchJobs(keywords: string, locationId: string, datePosted: string, sort: string): Promise<any>;
}
