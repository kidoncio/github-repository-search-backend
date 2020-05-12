import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsBoolean } from 'class-validator';

export class ItemLicense {
  @ApiProperty()
  key: string;

  name: string;

  @ApiProperty()
  spdx_id: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  node_id: string;
}

export class ItemOwner {
  @ApiProperty()
  login: string;

  @ApiProperty()
  id: number;

  @ApiProperty()
  node_id: string;

  @ApiProperty()
  avatar_url: string;

  @ApiProperty()
  gravatar_id: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  followers_url: string;

  @ApiProperty()
  following_url: string;

  @ApiProperty()
  gists_url: string;

  @ApiProperty()
  starred_url: string;

  @ApiProperty()
  subscriptions_url: string;

  @ApiProperty()
  organizations_url: string;

  @ApiProperty()
  repos_url: string;

  @ApiProperty()
  events_url: string;

  @ApiProperty()
  received_events_url: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  site_admin: boolean;
}

export class SearchResponseError {
  @ApiProperty()
  message: string;

  @ApiProperty()
  resource: string;

  @ApiProperty()
  field: string;

  @ApiProperty()
  code: string;
}

export class SearchResponseItem {
  @ApiProperty()
  id: number;

  @ApiProperty()
  node_id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  full_name: string;

  @ApiProperty()
  private: boolean;

  @ApiProperty({
    type: ItemOwner,
  })
  owner: ItemOwner;

  @ApiProperty()
  html_url: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  fork: boolean;

  @ApiProperty()
  url: string;

  @ApiProperty()
  forks_url: string;

  @ApiProperty()
  keys_url: string;

  @ApiProperty()
  collaborators_url: string;

  @ApiProperty()
  teams_url: string;

  @ApiProperty()
  hooks_url: string;

  @ApiProperty()
  issue_events_url: string;

  @ApiProperty()
  events_url: string;

  @ApiProperty()
  assignees_url: string;

  @ApiProperty()
  branches_url: string;

  @ApiProperty()
  tags_url: string;

  @ApiProperty()
  blobs_url: string;

  @ApiProperty()
  git_tags_url: string;

  @ApiProperty()
  git_refs_url: string;

  @ApiProperty()
  trees_url: string;

  @ApiProperty()
  statuses_url: string;

  @ApiProperty()
  languages_url: string;

  @ApiProperty()
  stargazers_url: string;

  @ApiProperty()
  contributors_url: string;

  @ApiProperty()
  subscribers_url: string;

  @ApiProperty()
  subscription_url: string;

  @ApiProperty()
  commits_url: string;

  @ApiProperty()
  git_commits_url: string;

  @ApiProperty()
  comments_url: string;

  @ApiProperty()
  issue_comment_url: string;

  @ApiProperty()
  contents_url: string;

  @ApiProperty()
  compare_url: string;

  @ApiProperty()
  merges_url: string;

  @ApiProperty()
  archive_url: string;

  @ApiProperty()
  downloads_url: string;

  @ApiProperty()
  issues_url: string;

  @ApiProperty()
  pulls_url: string;

  @ApiProperty()
  milestones_url: string;

  @ApiProperty()
  notifications_url: string;

  @ApiProperty()
  labels_url: string;

  @ApiProperty()
  releases_url: string;

  @ApiProperty()
  deployments_url: string;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string;

  @ApiProperty()
  pushed_at: string;

  @ApiProperty()
  git_url: string;

  @ApiProperty()
  ssh_url: string;

  @ApiProperty()
  clone_url: string;

  @ApiProperty()
  svn_url: string;

  @ApiProperty()
  homepage: null | string;

  @ApiProperty()
  size: number;

  @ApiProperty()
  stargazers_count: number;

  @ApiProperty()
  watchers_count: number;

  @ApiProperty()
  language: string;

  @ApiProperty()
  has_issues: boolean;

  @ApiProperty()
  has_projects: boolean;

  @ApiProperty()
  has_downloads: boolean;

  @ApiProperty()
  has_wiki: boolean;

  @ApiProperty()
  has_pages: boolean;

  @ApiProperty()
  forks_count: number;

  @ApiProperty()
  mirror_url: null | string;

  @ApiProperty()
  archived: boolean;

  @ApiProperty()
  disabled: boolean;

  @ApiProperty()
  open_issues_count: number;

  @ApiProperty({
    type: ItemLicense,
  })
  license: ItemLicense;

  @ApiProperty()
  forks: number;

  @ApiProperty()
  open_issues: number;

  @ApiProperty()
  watchers: number;

  @ApiProperty()
  default_branch: string;

  @ApiProperty()
  score: number;
}

export class SearchResponse {
  @ApiProperty()
  @IsNumber()
  total_count: number;

  @ApiProperty()
  @IsBoolean()
  incomplete_results: boolean;

  @ApiPropertyOptional({
    type: [SearchResponseItem],
  })
  items?: SearchResponseItem[];

  @ApiPropertyOptional({
    type: [SearchResponseError],
  })
  errors?: SearchResponseError[];

  @ApiPropertyOptional()
  documentation_url?: string;
}
