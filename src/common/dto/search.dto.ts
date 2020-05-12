import { ApiPropertyOptional } from '@nestjs/swagger';

export enum SortEnum {
  Stars = 'stars',
  Forks = 'forks',
  HelpWantedIssues = 'help-wanted-issues',
  Updated = 'updated',
}

export enum OrderEnum {
  Desc = 'desc',
  Asc = 'asc',
}

export class SearchDto {
  @ApiPropertyOptional({
    description: 'Language',
  })
  readonly language: string;

  @ApiPropertyOptional({
    description: 'Repository name',
  })
  readonly name: string;

  @ApiPropertyOptional({
    description:
      'Sorts the results of your query by number of stars, forks, or help-wanted-issues or how recently the items were updated.',
    enum: SortEnum,
  })
  readonly sort: string;

  @ApiPropertyOptional({
    description: 'Ordered by',
    enum: OrderEnum,
  })
  readonly order: string;
}
