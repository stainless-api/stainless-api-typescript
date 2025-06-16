// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Snippets extends APIResource {
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
  language:
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

  request: SnippetCreateRequestParams.UnionMember0 | SnippetCreateRequestParams.UnionMember1;

  version: 'next' | 'latest_released';
}

export namespace SnippetCreateRequestParams {
  export interface UnionMember0 {
    method: string;

    parameters: Array<UnionMember0.Parameter>;

    path: string;

    body?: UnionMember0.Body;
  }

  export namespace UnionMember0 {
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

  export interface UnionMember1 {
    method: string;

    queryString: Array<UnionMember1.QueryString>;

    url: string;

    postData?: UnionMember1.PostData;
  }

  export namespace UnionMember1 {
    export interface QueryString {
      name: string;

      value: string;
    }

    export interface PostData {
      mimeType: string;

      text: string;
    }
  }
}

export declare namespace Snippets {
  export {
    type SnippetCreateRequestResponse as SnippetCreateRequestResponse,
    type SnippetCreateRequestParams as SnippetCreateRequestParams,
  };
}
