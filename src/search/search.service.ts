import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { SearchDto } from 'src/common/dto/search.dto';
import { SearchResponse } from './interfaces/search-response.interface';

@Injectable()
export class SearchService {
  constructor(private httpService: HttpService) {}

  async get(searchDto: SearchDto): Promise<SearchResponse> {
    let query = '';

    query += `${searchDto.name}`;
    query += `+language=${searchDto.language}`;
    query += `&order=${searchDto.order}`;

    const response: SearchResponse = await this.httpService
      .get(`https://api.github.com/search/repositories?q=${query}`)
      .pipe(map(resp => resp.data))
      .toPromise();

    return response;
  }
}
