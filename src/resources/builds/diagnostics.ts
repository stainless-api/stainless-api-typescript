// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Diagnostics extends APIResource {
  /**
   * Get diagnostics for a build
   */
  list(
    buildID: string,
    query: DiagnosticListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DiagnosticListResponse> {
    return this._client.get(path`/v0/builds/${buildID}/diagnostics`, { query, ...options });
  }
}

export interface DiagnosticListResponse {
  data: Array<DiagnosticListResponse.Data>;

  has_more: boolean;

  next_cursor?: string;
}

export namespace DiagnosticListResponse {
  export interface Data {
    code: string;

    ignored: boolean;

    level: 'fatal' | 'error' | 'warning' | 'note';

    message: string;

    config_ref?: string;

    oas_ref?: string;
  }
}

export interface DiagnosticListParams {
  /**
   * Pagination cursor from a previous response
   */
  cursor?: string;

  /**
   * Maximum number of diagnostics to return, defaults to 100 (maximum: 100)
   */
  limit?: number;

  /**
   * Includes the given severity and above (fatal > error > warning > note).
   */
  severity?: 'fatal' | 'error' | 'warning' | 'note';

  /**
   * Optional list of language targets to filter diagnostics by
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

export declare namespace Diagnostics {
  export {
    type DiagnosticListResponse as DiagnosticListResponse,
    type DiagnosticListParams as DiagnosticListParams,
  };
}
