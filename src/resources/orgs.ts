// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Orgs extends APIResource {
  /**
   * Retrieve an organization by name
   */
  retrieve(orgName: string, options?: RequestOptions): APIPromise<OrgRetrieveResponse> {
    return this._client.get(path`/v0/orgs/${orgName}`, options);
  }

  /**
   * List organizations the user has access to
   */
  list(options?: RequestOptions): APIPromise<OrgListResponse> {
    return this._client.get('/v0/orgs', options);
  }
}

export interface OrgRetrieveResponse {
  display_name: string | null;

  object: 'org';

  slug: string;
}

export interface OrgListResponse {
  data: Array<OrgListResponse.Data>;

  has_more: boolean;

  next_cursor?: string;
}

export namespace OrgListResponse {
  export interface Data {
    display_name: string | null;

    object: 'org';

    slug: string;
  }
}

export declare namespace Orgs {
  export { type OrgRetrieveResponse as OrgRetrieveResponse, type OrgListResponse as OrgListResponse };
}
