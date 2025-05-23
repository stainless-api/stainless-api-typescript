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

export type SnippetCreateRequestParams =
  | SnippetCreateRequestParams.Variant0
  | SnippetCreateRequestParams.Variant1;

export declare namespace SnippetCreateRequestParams {
  export interface Variant0 {
    request: Variant0.Request;

    har?: null;

    language?:
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

    version?: 'next' | 'latest_released';
  }

  export namespace Variant0 {
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

  export interface Variant1 {
    har: Variant1.Har;

    language?:
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

    request?: null;

    version?: 'next' | 'latest_released';
  }

  export namespace Variant1 {
    export interface Har {
      log: Har.Log;
    }

    export namespace Har {
      export interface Log {
        entries: Array<Log.Entry>;
      }

      export namespace Log {
        export interface Entry {
          request: Entry.Request;
        }

        export namespace Entry {
          export interface Request {
            method: string;

            queryString: Array<Request.QueryString>;

            url: string;

            postData?: Request.PostData;
          }

          export namespace Request {
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
      }
    }
  }
}

export declare namespace Snippets {
  export {
    type SnippetCreateRequestResponse as SnippetCreateRequestResponse,
    type SnippetCreateRequestParams as SnippetCreateRequestParams,
  };
}
