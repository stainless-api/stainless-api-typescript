// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BuildsAPI from './builds';
import * as TargetOutputsAPI from './target-outputs';
import { TargetOutputRetrieveParams, TargetOutputRetrieveResponse, TargetOutputs } from './target-outputs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Builds extends APIResource {
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
  ): APIPromise<BuildListResponse> {
    const { project = this._client.project, ...query } = params ?? {};
    return this._client.get('/v0/builds', { query: { project, ...query }, ...options });
  }

  /**
   * Creates two builds whose outputs can be compared directly
   */
  compare(params: BuildCompareParams, options?: RequestOptions): APIPromise<BuildCompareResponse> {
    const { project = this._client.project, ...body } = params;
    return this._client.post('/v0/builds/compare', { body: { project, ...body }, ...options });
  }
}

export interface BuildObject {
  id: string;

  config_commit: string;

  documented_spec: BuildObject.UnionMember0 | BuildObject.UnionMember1 | null;

  object: 'build';

  org: string;

  project: string;

  targets: BuildObject.Targets;
}

export namespace BuildObject {
  export interface UnionMember0 {
    content: string;

    type: 'content';
  }

  export interface UnionMember1 {
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

  lint: BuildTarget.NotStarted | BuildTarget.Queued | BuildTarget.InProgress | BuildTarget.Completed;

  object: 'build_target';

  status: 'not_started' | 'codegen' | 'postgen' | 'completed';

  test: BuildTarget.NotStarted | BuildTarget.Queued | BuildTarget.InProgress | BuildTarget.Completed;

  build?: BuildTarget.NotStarted | BuildTarget.Queued | BuildTarget.InProgress | BuildTarget.Completed;

  upload?: BuildTarget.NotStarted | BuildTarget.Queued | BuildTarget.InProgress | BuildTarget.Completed;
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
      commit: Completed.Commit | null;

      conclusion:
        | 'success'
        | 'failure'
        | 'skipped'
        | 'cancelled'
        | 'action_required'
        | 'neutral'
        | 'timed_out'
        | 'error'
        | 'warning'
        | 'note'
        | 'merge_conflict'
        | 'upstream_merge_conflict'
        | 'fatal'
        | 'payment_required'
        | 'noop'
        | 'version_bump';

      merge_conflict_pr: Completed.MergeConflictPr | null;

      diagnostics?: Array<unknown>;
    }

    export namespace Completed {
      export interface Commit {
        repo: Commit.Repo;

        sha: string;
      }

      export namespace Commit {
        export interface Repo {
          branch: string;

          name: string;

          owner: string;
        }
      }

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
        | 'timed_out'
        | 'error'
        | 'warning'
        | 'note'
        | 'merge_conflict'
        | 'upstream_merge_conflict'
        | 'fatal'
        | 'payment_required'
        | 'noop'
        | 'version_bump';
    }
  }

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
        | 'timed_out'
        | 'error'
        | 'warning'
        | 'note'
        | 'merge_conflict'
        | 'upstream_merge_conflict'
        | 'fatal'
        | 'payment_required'
        | 'noop'
        | 'version_bump';
    }
  }

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
        | 'timed_out'
        | 'error'
        | 'warning'
        | 'note'
        | 'merge_conflict'
        | 'upstream_merge_conflict'
        | 'fatal'
        | 'payment_required'
        | 'noop'
        | 'version_bump';
    }
  }

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
        | 'timed_out'
        | 'error'
        | 'warning'
        | 'note'
        | 'merge_conflict'
        | 'upstream_merge_conflict'
        | 'fatal'
        | 'payment_required'
        | 'noop'
        | 'version_bump';
    }
  }
}

export interface BuildListResponse {
  data: Array<BuildObject>;

  has_more: boolean;

  next_cursor?: string;
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
  revision: string | Record<string, BuildCreateParams.unnamed_schema_with_map_parent_0>;

  /**
   * Whether to allow empty commits (no changes). Defaults to false.
   */
  allow_empty?: boolean;

  /**
   * Optional branch to use. If not specified, defaults to "main". When using a
   * branch name or merge command as revision, this must match or be omitted.
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
  targets?: Array<
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

export namespace BuildCreateParams {
  export interface unnamed_schema_with_map_parent_0 {
    /**
     * File content
     */
    content: string;
  }
}

export interface BuildListParams {
  /**
   * Project name
   */
  project?: string;

  /**
   * Branch name
   */
  branch?: string;

  /**
   * Pagination cursor from a previous response
   */
  cursor?: string;

  /**
   * Maximum number of builds to return, defaults to 10 (maximum: 100)
   */
  limit?: number;

  /**
   * A config commit SHA used for the build
   */
  revision?: string | Record<string, BuildListParams.unnamed_schema_with_map_parent_1>;
}

export namespace BuildListParams {
  export interface unnamed_schema_with_map_parent_1 {
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
  targets?: Array<
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

export namespace BuildCompareParams {
  /**
   * Parameters for the base build
   */
  export interface Base {
    /**
     * Specifies what to build: a branch name, a commit SHA, or file contents
     */
    revision: string | Record<string, Base.unnamed_schema_with_map_parent_2>;

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

  export namespace Base {
    export interface unnamed_schema_with_map_parent_2 {
      /**
       * File content
       */
      content: string;
    }
  }

  /**
   * Parameters for the head build
   */
  export interface Head {
    /**
     * Specifies what to build: a branch name, a commit SHA, or file contents
     */
    revision: string | Record<string, Head.unnamed_schema_with_map_parent_3>;

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

  export namespace Head {
    export interface unnamed_schema_with_map_parent_3 {
      /**
       * File content
       */
      content: string;
    }
  }
}

Builds.TargetOutputs = TargetOutputs;

export declare namespace Builds {
  export {
    type BuildObject as BuildObject,
    type BuildTarget as BuildTarget,
    type BuildListResponse as BuildListResponse,
    type BuildCompareResponse as BuildCompareResponse,
    type BuildCreateParams as BuildCreateParams,
    type BuildListParams as BuildListParams,
    type BuildCompareParams as BuildCompareParams,
  };

  export {
    TargetOutputs as TargetOutputs,
    type TargetOutputRetrieveResponse as TargetOutputRetrieveResponse,
    type TargetOutputRetrieveParams as TargetOutputRetrieveParams,
  };
}
