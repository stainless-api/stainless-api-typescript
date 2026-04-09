// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Stainless14 } from '../client';

export abstract class APIResource {
  protected _client: Stainless14;

  constructor(client: Stainless14) {
    this._client = client;
  }
}
