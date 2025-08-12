// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BuildsAPI from './builds';
import * as Shared from '../shared';
import * as DiagnosticsAPI from './diagnostics';
import {
  DiagnosticListParams,
  DiagnosticListResponse,
  DiagnosticListResponsesPage,
  Diagnostics,
  Target,
} from './diagnostics';
import * as TargetOutputsAPI from './target-outputs';
import { TargetOutputRetrieveParams, TargetOutputRetrieveResponse, TargetOutputs } from './target-outputs';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Builds extends APIResource {
  diagnostics: DiagnosticsAPI.Diagnostics = new DiagnosticsAPI.Diagnostics(this._client);
  targetOutputs: TargetOutputsAPI.TargetOutputs = new TargetOutputsAPI.TargetOutputs(this._client);

  /**
   * Create a new build
   */
  create(params: BuildCreateParams, options?: RequestOptions): APIPromise<BuildObject> {
    const { project = this._client.project, ...body } = params;
    return this._client.post('/v0/builds', { body: { project, ...body }, ...options });
  }

  /**
   * Retrieve a build by ID
   */
  retrieve(buildID: string, options?: RequestOptions): APIPromise<BuildObject> {
    return this._client.get(path`/v0/builds/${buildID}`, options);
  }

  /**
   * List builds for a project
   */
  list(
    params: BuildListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BuildObjectsPage, BuildObject> {
    const { project = this._client.project, ...query } = params ?? {};
    return this._client.getAPIList('/v0/builds', Page<BuildObject>, {
      query: { project, ...query },
      ...options,
    });
  }

  /**
   * Creates two builds whose outputs can be compared directly
   */
  compare(params: BuildCompareParams, options?: RequestOptions): APIPromise<BuildCompareResponse> {
    const { project = this._client.project, ...body } = params;
    return this._client.post('/v0/builds/compare', { body: { project, ...body }, ...options });
  }
}

export type BuildObjectsPage = Page<BuildObject>;

export interface BuildObject {
  id: string;

  config_commit: string;

  created_at: string;

  documented_spec: BuildObject.UnionMember0 | BuildObject.UnionMember1 | null;

  object: 'build';

  org: string;

  project: string;

  targets: BuildObject.Targets;

  updated_at: string;
}

export namespace BuildObject {
  export interface UnionMember0 {
    content: string;

    type: 'content';
  }

  export interface UnionMember1 {
    expires: string;

    type: 'url';

    url: string;
  }

  export interface Targets {
    cli?: BuildsAPI.BuildTarget;

    csharp?: BuildsAPI.BuildTarget;

    go?: BuildsAPI.BuildTarget;

    java?: BuildsAPI.BuildTarget;

    kotlin?: BuildsAPI.BuildTarget;

    node?: BuildsAPI.BuildTarget;

    php?: BuildsAPI.BuildTarget;

    python?: BuildsAPI.BuildTarget;

    ruby?: BuildsAPI.BuildTarget;

    terraform?: BuildsAPI.BuildTarget;

    typescript?: BuildsAPI.BuildTarget;
  }
}

export interface BuildTarget {
  commit: BuildTarget.NotStarted | BuildTarget.Queued | BuildTarget.InProgress | BuildTarget.Completed;

  lint: CheckStep;

  object: 'build_target';

  status: 'not_started' | 'codegen' | 'postgen' | 'completed';

  test: CheckStep;

  build?: CheckStep;

  upload?: CheckStep;
}

export namespace BuildTarget {
  export interface NotStarted {
    status: 'not_started';
  }

  export interface Queued {
    status: 'queued';
  }

  export interface InProgress {
    status: 'in_progress';
  }

  export interface Completed {
    completed: Completed.Completed;

    status: 'completed';
  }

  export namespace Completed {
    export interface Completed {
      commit: Shared.Commit | null;

      conclusion:
        | 'error'
        | 'warning'
        | 'note'
        | 'success'
        | 'merge_conflict'
        | 'upstream_merge_conflict'
        | 'fatal'
        | 'payment_required'
        | 'cancelled'
        | 'timed_out'
        | 'noop'
        | 'version_bump';

      merge_conflict_pr: Completed.MergeConflictPr | null;
    }

    export namespace Completed {
      export interface MergeConflictPr {
        number: number;

        repo: MergeConflictPr.Repo;
      }

      export namespace MergeConflictPr {
        export interface Repo {
          name: string;

          owner: string;
        }
      }
    }
  }
}

export type CheckStep = CheckStep.NotStarted | CheckStep.Queued | CheckStep.InProgress | CheckStep.Completed;

export namespace CheckStep {
  export interface NotStarted {
    status: 'not_started';
  }

  export interface Queued {
    status: 'queued';
  }

  export interface InProgress {
    status: 'in_progress';
  }

  export interface Completed {
    completed: Completed.Completed;

    status: 'completed';
  }

  export namespace Completed {
    export interface Completed {
      conclusion:
        | 'success'
        | 'failure'
        | 'skipped'
        | 'cancelled'
        | 'action_required'
        | 'neutral'
        | 'timed_out';

      url: string | null;
    }
  }
}

export interface BuildCompareResponse {
  base: BuildObject;

  head: BuildObject;
}

export interface BuildCreateParams {
  /**
   * Project name
   */
  project?: string;

  /**
   * Specifies what to build: a branch name, commit SHA, merge command
   * ("base..head"), or file contents
   */
  revision: string | { [key: string]: Shared.FileInput };

  /**
   * Whether to allow empty commits (no changes). Defaults to false.
   */
  allow_empty?: boolean;

  /**
   * The Stainless branch to use for the build. If not specified, the branch is
   * inferred from the `revision`, and will 400 when that is not possible.
   */
  branch?: string;

  /**
   * Optional commit message to use when creating a new commit.
   */
  commit_message?: string;

  /**
   * Optional list of SDK targets to build. If not specified, all configured targets
   * will be built.
   */
  targets?: Array<DiagnosticsAPI.Target>;
}

export interface BuildListParams extends PageParams {
  /**
   * Project name
   */
  project?: string;

  /**
   * Branch name
   */
  branch?: string;

  /**
   * Maximum number of builds to return, defaults to 10 (maximum: 100)
   */
  limit?: number;

  /**
   * A config commit SHA used for the build
   */
  revision?: string | { [key: string]: BuildListParams.unnamed_schema_with_map_parent_0 };
}

export namespace BuildListParams {
  export interface unnamed_schema_with_map_parent_0 {
    /**
     * File content hash
     */
    hash: string;
  }
}

export interface BuildCompareParams {
  /**
   * Parameters for the base build
   */
  base: BuildCompareParams.Base;

  /**
   * Parameters for the head build
   */
  head: BuildCompareParams.Head;

  /**
   * Project name
   */
  project?: string;

  /**
   * Optional list of SDK targets to build. If not specified, all configured targets
   * will be built.
   */
  targets?: Array<DiagnosticsAPI.Target>;
}

export namespace BuildCompareParams {
  /**
   * Parameters for the base build
   */
  export interface Base {
    /**
     * Specifies what to build: a branch name, a commit SHA, or file contents
     */
    revision: string | { [key: string]: Shared.FileInput };

    /**
     * Optional branch to use. If not specified, defaults to "main". When using a
     * branch name as revision, this must match or be omitted.
     */
    branch?: string;

    /**
     * Optional commit message to use when creating a new commit.
     */
    commit_message?: string;
  }

  /**
   * Parameters for the head build
   */
  export interface Head {
    /**
     * Specifies what to build: a branch name, a commit SHA, or file contents
     */
    revision: string | { [key: string]: Shared.FileInput };

    /**
     * Optional branch to use. If not specified, defaults to "main". When using a
     * branch name as revision, this must match or be omitted.
     */
    branch?: string;

    /**
     * Optional commit message to use when creating a new commit.
     */
    commit_message?: string;
  }
}

Builds.Diagnostics = Diagnostics;
Builds.TargetOutputs = TargetOutputs;

export declare namespace Builds {
  export {
    type BuildObject as BuildObject,
    type BuildTarget as BuildTarget,
    type CheckStep as CheckStep,
    type BuildCompareResponse as BuildCompareResponse,
    type BuildObjectsPage as BuildObjectsPage,
    type BuildCreateParams as BuildCreateParams,
    type BuildListParams as BuildListParams,
    type BuildCompareParams as BuildCompareParams,
  };

  export {
    Diagnostics as Diagnostics,
    type Target as Target,
    type DiagnosticListResponse as DiagnosticListResponse,
    type DiagnosticListResponsesPage as DiagnosticListResponsesPage,
    type DiagnosticListParams as DiagnosticListParams,
  };

  export {
    TargetOutputs as TargetOutputs,
    type TargetOutputRetrieveResponse as TargetOutputRetrieveResponse,
    type TargetOutputRetrieveParams as TargetOutputRetrieveParams,
  };
}
