import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { SearchDto } from 'src/common/dto/search.dto';
import { SearchResponse } from './interfaces/search-response.interface';

@Injectable()
export class SearchService {
  private readonly url: string = 'https://api.github.com/search/repositories';

  constructor(private httpService: HttpService) {}

  async get(searchDto: SearchDto): Promise<SearchResponse> {
    let query = '';

    if (searchDto.keyword) query += searchDto.keyword;

    if (searchDto.language) query += `+language=${searchDto.language}`;

    if (searchDto.order)
      query = this.addToQuery(query, 'order', searchDto.order);

    if (searchDto.sort) query = this.addToQuery(query, 'sort', searchDto.sort);

    const response: SearchResponse = await this.httpService
      .get(`${this.url}?q=${query}`)
      .pipe(map(resp => resp.data))
      .toPromise();

    return response;
  }

  private addToQuery(query: string, key: string, value: string): string {
    if (query) query += '&';

    query += `${key}=${value}`;

    return query;
  }
}
