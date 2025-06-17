// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Generate extends APIResource {
  createSpec(
    params: GenerateCreateSpecParams,
    options?: RequestOptions,
  ): APIPromise<GenerateCreateSpecResponse> {
    const { project = this._client.project, ...body } = params;
    return this._client.post('/v0/generate/spec', { body: { project, ...body }, ...options });
  }
}

export interface GenerateCreateSpecResponse {
  spec?: unknown;
}

export interface GenerateCreateSpecParams {
  project?: string;

  source: GenerateCreateSpecParams.UnionMember0 | GenerateCreateSpecParams.UnionMember1;
}

export namespace GenerateCreateSpecParams {
  export interface UnionMember0 {
    revision: string;

    type: 'git';
  }

  export interface UnionMember1 {
    openapi_spec: string;

    stainless_config: string;

    type: 'upload';
  }
}

export declare namespace Generate {
  export {
    type GenerateCreateSpecResponse as GenerateCreateSpecResponse,
    type GenerateCreateSpecParams as GenerateCreateSpecParams,
  };
}
