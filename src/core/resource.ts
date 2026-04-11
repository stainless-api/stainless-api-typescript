// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Stainless16 } from '../client';

export abstract class APIResource {
  protected _client: Stainless16;

  constructor(client: Stainless16) {
    this._client = client;
  }
}
