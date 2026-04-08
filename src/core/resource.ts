// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Stainless6 } from '../client';

export abstract class APIResource {
  protected _client: Stainless6;

  constructor(client: Stainless6) {
    this._client = client;
  }
}
