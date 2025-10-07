// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Spec extends APIResource {
  /**
   * Retrieve the decorated spec for a given application and project.
   */
  retrieveDecoratedSpec(
    projectName: string,
    params: SpecRetrieveDecoratedSpecParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { clientId } = params;
    return this._client.get(path`/v0/spec/application/${clientId}/${projectName}`, options);
  }
}

export type SpecRetrieveDecoratedSpecResponse = unknown;

export interface SpecRetrieveDecoratedSpecParams {
  clientId: string;
}

export declare namespace Spec {
  export {
    type SpecRetrieveDecoratedSpecResponse as SpecRetrieveDecoratedSpecResponse,
    type SpecRetrieveDecoratedSpecParams as SpecRetrieveDecoratedSpecParams,
  };
}
