// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BranchesAPI from './branches';
import { BranchCreateParams, BranchRetrieveParams, Branches, ProjectBranch } from './branches';
import * as ConfigsAPI from './configs';
import {
  ConfigGuessParams,
  ConfigGuessResponse,
  ConfigRetrieveParams,
  ConfigRetrieveResponse,
  Configs,
} from './configs';
import * as SnippetsAPI from './snippets';
import { SnippetCreateRequestParams, SnippetCreateRequestResponse, Snippets } from './snippets';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Projects extends APIResource {
  branches: BranchesAPI.Branches = new BranchesAPI.Branches(this._client);
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
  snippets: SnippetsAPI.Snippets = new SnippetsAPI.Snippets(this._client);

  /**
   * Retrieve a project by name
   */
  retrieve(projectName: string, options?: RequestOptions): APIPromise<ProjectRetrieveResponse> {
    return this._client.get(path`/v0/projects/${projectName}`, options);
  }

  /**
   * Update a project's properties
   */
  update(
    projectName: string,
    body: ProjectUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectUpdateResponse> {
    return this._client.patch(path`/v0/projects/${projectName}`, { body, ...options });
  }

  /**
   * List projects in an organization
   */
  list(query: ProjectListParams, options?: RequestOptions): APIPromise<ProjectListResponse> {
    return this._client.get('/v0/projects', { query, ...options });
  }
}

export interface ProjectRetrieveResponse {
  config_repo: string;

  display_name: string | null;

  object: 'project';

  org: string;

  slug: string;
}

export interface ProjectUpdateResponse {
  config_repo: string;

  display_name: string | null;

  object: 'project';

  org: string;

  slug: string;
}

export interface ProjectListResponse {
  data: Array<ProjectListResponse.Data>;

  has_more: boolean;

  next_cursor?: string;
}

export namespace ProjectListResponse {
  export interface Data {
    config_repo: string;

    display_name: string | null;

    object: 'project';

    org: string;

    slug: string;
  }
}

export interface ProjectUpdateParams {
  display_name?: string | null;
}

export interface ProjectListParams {
  org: string;

  /**
   * Pagination cursor from a previous response
   */
  cursor?: string;

  /**
   * Maximum number of projects to return, defaults to 10 (maximum: 100)
   */
  limit?: number;
}

Projects.Branches = Branches;
Projects.Configs = Configs;
Projects.Snippets = Snippets;

export declare namespace Projects {
  export {
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectUpdateResponse as ProjectUpdateResponse,
    type ProjectListResponse as ProjectListResponse,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
  };

  export {
    Branches as Branches,
    type ProjectBranch as ProjectBranch,
    type BranchCreateParams as BranchCreateParams,
    type BranchRetrieveParams as BranchRetrieveParams,
  };

  export {
    Configs as Configs,
    type ConfigRetrieveResponse as ConfigRetrieveResponse,
    type ConfigGuessResponse as ConfigGuessResponse,
    type ConfigRetrieveParams as ConfigRetrieveParams,
    type ConfigGuessParams as ConfigGuessParams,
  };

  export {
    Snippets as Snippets,
    type SnippetCreateRequestResponse as SnippetCreateRequestResponse,
    type SnippetCreateRequestParams as SnippetCreateRequestParams,
  };
}
