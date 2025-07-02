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
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Projects extends APIResource {
  branches: BranchesAPI.Branches = new BranchesAPI.Branches(this._client);
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);

  /**
   * Create a new project
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<ProjectCreateResponse> {
    return this._client.post('/v0/projects', { body, ...options });
  }

  /**
   * Retrieve a project by name
   */
  retrieve(
    params: ProjectRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectRetrieveResponse> {
    const { project = this._client.project } = params ?? {};
    return this._client.get(path`/v0/projects/${project}`, options);
  }

  /**
   * Update a project's properties
   */
  update(
    params: ProjectUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectUpdateResponse> {
    const { project = this._client.project, ...body } = params ?? {};
    return this._client.patch(path`/v0/projects/${project}`, { body, ...options });
  }

  /**
   * List projects in an organization
   */
  list(
    query: ProjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectListResponse> {
    return this._client.get('/v0/projects', { query, ...options });
  }
}

export interface ProjectCreateResponse {
  config_repo: string;

  display_name: string | null;

  object: 'project';

  org: string;

  slug: string;

  targets: Array<
    | 'node'
    | 'typescript'
    | 'python'
    | 'go'
    | 'java'
    | 'kotlin'
    | 'ruby'
    | 'terraform'
    | 'cli'
    | 'php'
    | 'csharp'
  >;
}

export interface ProjectRetrieveResponse {
  config_repo: string;

  display_name: string | null;

  object: 'project';

  org: string;

  slug: string;

  targets: Array<
    | 'node'
    | 'typescript'
    | 'python'
    | 'go'
    | 'java'
    | 'kotlin'
    | 'ruby'
    | 'terraform'
    | 'cli'
    | 'php'
    | 'csharp'
  >;
}

export interface ProjectUpdateResponse {
  config_repo: string;

  display_name: string | null;

  object: 'project';

  org: string;

  slug: string;

  targets: Array<
    | 'node'
    | 'typescript'
    | 'python'
    | 'go'
    | 'java'
    | 'kotlin'
    | 'ruby'
    | 'terraform'
    | 'cli'
    | 'php'
    | 'csharp'
  >;
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

    targets: Array<
      | 'node'
      | 'typescript'
      | 'python'
      | 'go'
      | 'java'
      | 'kotlin'
      | 'ruby'
      | 'terraform'
      | 'cli'
      | 'php'
      | 'csharp'
    >;
  }
}

export interface ProjectCreateParams {
  /**
   * Human-readable project name
   */
  display_name: string;

  /**
   * Organization name
   */
  org: string;

  /**
   * File contents to commit
   */
  revision: { [key: string]: ProjectCreateParams.Content | ProjectCreateParams.URL };

  /**
   * Project name/slug
   */
  slug: string;

  /**
   * Targets to generate for
   */
  targets: Array<
    | 'node'
    | 'typescript'
    | 'python'
    | 'go'
    | 'java'
    | 'kotlin'
    | 'ruby'
    | 'terraform'
    | 'cli'
    | 'php'
    | 'csharp'
  >;
}

export namespace ProjectCreateParams {
  export interface Content {
    /**
     * File content
     */
    content: string;
  }

  export interface URL {
    /**
     * URL to fetch file content from
     */
    url: string;
  }
}

export interface ProjectRetrieveParams {
  project?: string;
}

export interface ProjectUpdateParams {
  /**
   * Path param:
   */
  project?: string;

  /**
   * Body param:
   */
  display_name?: string | null;
}

export interface ProjectListParams {
  /**
   * Pagination cursor from a previous response
   */
  cursor?: string;

  /**
   * Maximum number of projects to return, defaults to 10 (maximum: 100)
   */
  limit?: number;

  org?: string;
}

Projects.Branches = Branches;
Projects.Configs = Configs;

export declare namespace Projects {
  export {
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectUpdateResponse as ProjectUpdateResponse,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectRetrieveParams as ProjectRetrieveParams,
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
}
