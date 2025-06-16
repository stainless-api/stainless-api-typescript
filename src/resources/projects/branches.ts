// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BuildsAPI from '../builds/builds';
import { APIPromise } from '../../core/api-promise';
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
}

export interface ProjectBranch {
  branch: string;

  config_commit: ProjectBranch.ConfigCommit;

  latest_build: BuildsAPI.BuildObject | null;

  object: 'project_branch';

  org: string;

  project: string;
}

export namespace ProjectBranch {
  export interface ConfigCommit {
    repo: ConfigCommit.Repo;

    sha: string;
  }

  export namespace ConfigCommit {
    export interface Repo {
      branch: string;

      name: string;

      owner: string;
    }
  }
}

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

export declare namespace Branches {
  export {
    type ProjectBranch as ProjectBranch,
    type BranchCreateParams as BranchCreateParams,
    type BranchRetrieveParams as BranchRetrieveParams,
  };
}
