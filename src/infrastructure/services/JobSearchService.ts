import axios, { AxiosRequestConfig } from 'axios';
import { IJobSearchService } from '../../domain/services/IJobSearchService';

export class JobSearchService implements IJobSearchService {
  private apiKey: string;
  private apiHost: string;

  constructor(apiKey: string, apiHost: string) {
    this.apiKey = apiKey;
    this.apiHost = apiHost;
  }

  async searchJobs(keywords: string, locationId: string, datePosted: string, sort: string): Promise<any> {
    const options: AxiosRequestConfig = {
      method: 'GET',
      url: 'https://linkedin-api8.p.rapidapi.com/search-jobs',
      params: { keywords, locationId, datePosted, sort },
      headers: {
        'X-RapidAPI-Key': this.apiKey,
        'X-RapidAPI-Host': this.apiHost
      }
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
