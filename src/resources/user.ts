// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class User extends APIResource {
  /**
   * Retrieve the currently authenticated user's information.
   */
  retrieve(options?: RequestOptions): APIPromise<UserRetrieveResponse> {
    return this._client.get('/v0/user', options);
  }
}

export interface UserRetrieveResponse {
  id: string;

  email: string | null;

  github: UserRetrieveResponse.GitHub | null;

  name: string | null;

  object: 'user';
}

export namespace UserRetrieveResponse {
  export interface GitHub {
    username: string;
  }
}

export declare namespace User {
  export { type UserRetrieveResponse as UserRetrieveResponse };
}
