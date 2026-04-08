// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Stainless3 } from '../client';

export abstract class APIResource {
  protected _client: Stainless3;

  constructor(client: Stainless3) {
    this._client = client;
  }
}
