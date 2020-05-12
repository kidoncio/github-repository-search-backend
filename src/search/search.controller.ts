import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { SearchResponse } from './interfaces/search-response.interface';
import { SearchDto } from 'src/common/dto/search.dto';

@Controller()
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('search')
  @ApiOkResponse({
    description: 'Busca dos repositórios retornado com sucesso.',
    type: SearchResponse,
  })
  async get(@Query() searchDto: SearchDto): Promise<SearchResponse> {
    const result: SearchResponse = await this.searchService.get(searchDto);

    return result;
  }
}
