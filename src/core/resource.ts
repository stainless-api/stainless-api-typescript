// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Stainless13 } from '../client';

export abstract class APIResource {
  protected _client: Stainless13;

  constructor(client: Stainless13) {
    this._client = client;
  }
}
