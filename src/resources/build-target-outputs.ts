// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class BuildTargetOutputs extends APIResource {
  /**
   * TODO
   */
  retrieve(
    query: BuildTargetOutputRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<BuildTargetOutputRetrieveResponse> {
    return this._client.get('/v0/build_target_outputs', { query, ...options });
  }
}

export type BuildTargetOutputRetrieveResponse =
  | BuildTargetOutputRetrieveResponse.UnionMember0
  | BuildTargetOutputRetrieveResponse.UnionMember1;

export namespace BuildTargetOutputRetrieveResponse {
  export interface UnionMember0 {
    output: 'url';

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

    /**
     * URL to git remote
     */
    url: string;
  }
}

export interface BuildTargetOutputRetrieveParams {
  /**
   * Build ID
   */
  build_id: string;

  /**
   * SDK language target name
   */
  target: 'node' | 'typescript' | 'python' | 'go' | 'java' | 'kotlin' | 'ruby' | 'terraform' | 'cli';

  /**
   * Type of output to download: source code
   */
  type: 'source';

  /**
   * Output format: url (download URL) or git (temporary access token)
   */
  output?: 'url' | 'git';
}

export declare namespace BuildTargetOutputs {
  export {
    type BuildTargetOutputRetrieveResponse as BuildTargetOutputRetrieveResponse,
    type BuildTargetOutputRetrieveParams as BuildTargetOutputRetrieveParams,
  };
}
