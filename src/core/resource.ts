// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Stainless10 } from '../client';

export abstract class APIResource {
  protected _client: Stainless10;

  constructor(client: Stainless10) {
    this._client = client;
  }
}
