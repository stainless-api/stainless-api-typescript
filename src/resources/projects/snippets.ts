// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Snippets extends APIResource {
  /**
   * TODO
   */
  createRequest(
    projectName: string,
    body: SnippetCreateRequestParams,
    options?: RequestOptions,
  ): APIPromise<SnippetCreateRequestResponse> {
    return this._client.post(path`/v0/projects/${projectName}/snippets/request`, { body, ...options });
  }
}

export interface SnippetCreateRequestResponse {
  snippet: string;
}

export interface SnippetCreateRequestParams {
  language: 'node' | 'typescript' | 'python' | 'go' | 'java' | 'kotlin' | 'ruby' | 'terraform' | 'cli';

  request: SnippetCreateRequestParams.Request;

  version: 'next' | 'latest_released';
}

export namespace SnippetCreateRequestParams {
  export interface Request {
    method: string;

    parameters: Array<Request.Parameter>;

    path: string;

    body?: Request.Body;
  }

  export namespace Request {
    export interface Parameter {
      in: 'path' | 'query' | 'header' | 'cookie';

      name: string;

      value?: unknown;
    }

    export interface Body {
      fileParam?: string;

      filePath?: string;
    }
  }
}

export declare namespace Snippets {
  export {
    type SnippetCreateRequestResponse as SnippetCreateRequestResponse,
    type SnippetCreateRequestParams as SnippetCreateRequestParams,
  };
}
