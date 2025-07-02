// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { List, type ListParams, PagePromise } from '../../core/pagination';
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
  ): PagePromise<DiagnosticListResponsesList, DiagnosticListResponse> {
    return this._client.getAPIList(path`/v0/builds/${buildID}/diagnostics`, List<DiagnosticListResponse>, {
      query,
      ...options,
    });
  }
}

export type DiagnosticListResponsesList = List<DiagnosticListResponse>;

export type DiagnosticListResponse = unknown;

export interface DiagnosticListParams extends ListParams {
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
    type DiagnosticListResponsesList as DiagnosticListResponsesList,
    type DiagnosticListParams as DiagnosticListParams,
  };
}
