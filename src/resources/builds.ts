// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as BuildsAPI from './builds';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Builds extends APIResource {
  /**
   * TODO
   */
  create(body: BuildCreateParams, options?: RequestOptions): APIPromise<BuildObject> {
    return this._client.post('/v0/builds', { body, ...options });
  }

  /**
   * TODO
   */
  retrieve(buildID: string, options?: RequestOptions): APIPromise<BuildObject> {
    return this._client.get(path`/v0/builds/${buildID}`, options);
  }

  /**
   * TODO
   */
  list(query: BuildListParams, options?: RequestOptions): APIPromise<BuildListResponse> {
    return this._client.get('/v0/builds', { query, ...options });
  }
}

export interface BuildObject {
  id: string;

  config_commit: string;

  object: 'build';

  targets: BuildObject.Targets;
}

export namespace BuildObject {
  export interface Targets {
    cli?: BuildsAPI.BuildTarget;

    go?: BuildsAPI.BuildTarget;

    java?: BuildsAPI.BuildTarget;

    kotlin?: BuildsAPI.BuildTarget;

    node?: BuildsAPI.BuildTarget;

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
        | 'timed_out';
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
        | 'timed_out';
    }
  }
}

export interface BuildListResponse {
  data: Array<BuildObject>;

  has_more: boolean;

  next_cursor?: string;
}

export interface BuildCreateParams {
  /**
   * Project name
   */
  project: string;

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
  targets?: Array<'node' | 'typescript' | 'python' | 'go' | 'java' | 'kotlin' | 'ruby' | 'terraform' | 'cli'>;
}

export namespace BuildCreateParams {
  export interface unnamed_schema_with_map_parent_0 {
    /**
     * The file content
     */
    content: string;
  }
}

export interface BuildListParams {
  /**
   * Project name
   */
  project: string;

  /**
   * Branch name
   */
  branch?: string;

  /**
   * Config commit SHA
   */
  config_commit?: string;

  /**
   * Pagination cursor from a previous response
   */
  cursor?: string;

  /**
   * Maximum number of builds to return, defaults to 10
   */
  limit?: number;
}

export declare namespace Builds {
  export {
    type BuildObject as BuildObject,
    type BuildTarget as BuildTarget,
    type BuildListResponse as BuildListResponse,
    type BuildCreateParams as BuildCreateParams,
    type BuildListParams as BuildListParams,
  };
}
