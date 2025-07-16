// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DiagnosticsAPI from './diagnostics';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class TargetOutputs extends APIResource {
  /**
   * Download the output of a build target
   */
  retrieve(
    query: TargetOutputRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<TargetOutputRetrieveResponse> {
    return this._client.get('/v0/build_target_outputs', { query, ...options });
  }
}

export type TargetOutputRetrieveResponse =
  | TargetOutputRetrieveResponse.UnionMember0
  | TargetOutputRetrieveResponse.UnionMember1;

export namespace TargetOutputRetrieveResponse {
  export interface UnionMember0 {
    output: 'url';

    target: DiagnosticsAPI.Target;

    type: 'source' | 'dist' | 'wheel';

    /**
     * URL for direct download
     */
    url: string;
  }

  export interface UnionMember1 {
    /**
     * Temporary GitHub access token
     */
    token: string;

    output: 'git';

    /**
     * Git reference (commit SHA, branch, or tag)
     */
    ref: string;

    target: DiagnosticsAPI.Target;

    type: 'source' | 'dist' | 'wheel';

    /**
     * URL to git remote
     */
    url: string;
  }
}

export interface TargetOutputRetrieveParams {
  /**
   * Build ID
   */
  build_id: string;

  /**
   * SDK language target name
   */
  target:
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
    | 'csharp';

  type: 'source' | 'dist' | 'wheel';

  /**
   * Output format: url (download URL) or git (temporary access token)
   */
  output?: 'url' | 'git';
}

export declare namespace TargetOutputs {
  export {
    type TargetOutputRetrieveResponse as TargetOutputRetrieveResponse,
    type TargetOutputRetrieveParams as TargetOutputRetrieveParams,
  };
}
