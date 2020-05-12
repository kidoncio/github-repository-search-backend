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

    if (searchDto.name) query += `${searchDto.name}`;

    if (searchDto.language) query += `+language=${searchDto.language}`;

    if (searchDto.order) {
      if (query) {
        query += '&';
      }

      query += `order=${searchDto.order}`;

      if (searchDto.sort) {
        query += `&sort=${searchDto.sort}`;
      }
    }

    let apiUrl: string = this.url;

    if (query) apiUrl += `?q=${query}`;

    const response: SearchResponse = await this.httpService
      .get(apiUrl)
      .pipe(map(resp => resp.data))
      .toPromise();

    return response;
  }
}
