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
   * TODO
   */
  retrieve(projectName: string, options?: RequestOptions): APIPromise<ProjectRetrieveResponse> {
    return this._client.get(path`/v0/projects/${projectName}`, options);
  }

  /**
   * TODO
   */
  update(
    projectName: string,
    body: ProjectUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectUpdateResponse> {
    return this._client.patch(path`/v0/projects/${projectName}`, { body, ...options });
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

export interface ProjectUpdateParams {
  display_name?: string | null;
}

Projects.Branches = Branches;
Projects.Configs = Configs;

export declare namespace Projects {
  export {
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectUpdateResponse as ProjectUpdateResponse,
    type ProjectUpdateParams as ProjectUpdateParams,
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
