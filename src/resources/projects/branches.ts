// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BuildsAPI from '../builds';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Branches extends APIResource {
  /**
   * TODO
   */
  create(project: string, body: BranchCreateParams, options?: RequestOptions): APIPromise<ProjectBranch> {
    return this._client.post(path`/v0/projects/${project}/branches`, { body, ...options });
  }

  /**
   * TODO
   */
  retrieve(
    branch: string,
    params: BranchRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ProjectBranch> {
    const { project } = params;
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
  branch: string;

  branch_from: string;

  force?: boolean;
}

export interface BranchRetrieveParams {
  project: string;
}

export declare namespace Branches {
  export {
    type ProjectBranch as ProjectBranch,
    type BranchCreateParams as BranchCreateParams,
    type BranchRetrieveParams as BranchRetrieveParams,
  };
}
