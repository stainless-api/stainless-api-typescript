// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Stainless9 } from '../client';

export abstract class APIResource {
  protected _client: Stainless9;

  constructor(client: Stainless9) {
    this._client = client;
  }
}
