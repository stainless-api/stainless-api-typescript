// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as BuildsAPI from '../builds/builds';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Branches extends APIResource {
  /**
   * Create a new branch for a project
   */
  create(params: BranchCreateParams, options?: RequestOptions): APIPromise<ProjectBranch> {
    const { project = this._client.project, ...body } = params;
    return this._client.post(path`/v0/projects/${project}/branches`, { body, ...options });
  }

  /**
   * Retrieve a project branch
   */
  retrieve(
    branch: string,
    params: BranchRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectBranch> {
    const { project = this._client.project } = params ?? {};
    return this._client.get(path`/v0/projects/${project}/branches/${branch}`, options);
  }

  /**
   * List project branches
   */
  list(
    params: BranchListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BranchListResponsesPage, BranchListResponse> {
    const { project = this._client.project, ...query } = params ?? {};
    return this._client.getAPIList(path`/v0/projects/${project}/branches`, Page<BranchListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Delete a project branch
   */
  delete(
    branch: string,
    params: BranchDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { project = this._client.project } = params ?? {};
    return this._client.delete(path`/v0/projects/${project}/branches/${branch}`, options);
  }
}

export type BranchListResponsesPage = Page<BranchListResponse>;

export interface ProjectBranch {
  branch: string;

  config_commit: Shared.Commit;

  latest_build: BuildsAPI.BuildObject | null;

  object: 'project_branch';

  org: string;

  project: string;
}

export interface BranchListResponse {
  branch: string;

  config_commit: Shared.Commit;

  latest_build_id: string;

  object: 'project_branch';

  org: string;

  project: string;
}

export type BranchDeleteResponse = unknown;

export interface BranchCreateParams {
  /**
   * Path param:
   */
  project?: string;

  /**
   * Body param: Name of the new project branch.
   */
  branch: string;

  /**
   * Body param: Branch or commit SHA to branch from.
   */
  branch_from: string;

  /**
   * Body param: Whether to throw an error if the branch already exists. Defaults to
   * false.
   */
  force?: boolean;
}

export interface BranchRetrieveParams {
  project?: string;
}

export interface BranchListParams extends PageParams {
  /**
   * Path param:
   */
  project?: string;

  /**
   * Query param: Maximum number of items to return, defaults to 10 (maximum: 100)
   */
  limit?: number;
}

export interface BranchDeleteParams {
  project?: string;
}

export declare namespace Branches {
  export {
    type ProjectBranch as ProjectBranch,
    type BranchListResponse as BranchListResponse,
    type BranchDeleteResponse as BranchDeleteResponse,
    type BranchListResponsesPage as BranchListResponsesPage,
    type BranchCreateParams as BranchCreateParams,
    type BranchRetrieveParams as BranchRetrieveParams,
    type BranchListParams as BranchListParams,
    type BranchDeleteParams as BranchDeleteParams,
  };
}
