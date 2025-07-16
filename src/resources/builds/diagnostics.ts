// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
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
  ): PagePromise<DiagnosticListResponsesPage, DiagnosticListResponse> {
    return this._client.getAPIList(path`/v0/builds/${buildID}/diagnostics`, Page<DiagnosticListResponse>, {
      query,
      ...options,
    });
  }
}

export type DiagnosticListResponsesPage = Page<DiagnosticListResponse>;

export type Target =
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

export interface DiagnosticListResponse {
  code: string;

  ignored: boolean;

  level: 'fatal' | 'error' | 'warning' | 'note';

  message: string;

  config_ref?: string;

  oas_ref?: string;
}

export interface DiagnosticListParams extends PageParams {
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
  targets?: Array<Target>;
}

export declare namespace Diagnostics {
  export {
    type Target as Target,
    type DiagnosticListResponse as DiagnosticListResponse,
    type DiagnosticListResponsesPage as DiagnosticListResponsesPage,
    type DiagnosticListParams as DiagnosticListParams,
  };
}
