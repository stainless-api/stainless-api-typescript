// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Stainless1 } from '../client';

export abstract class APIResource {
  protected _client: Stainless1;

  constructor(client: Stainless1) {
    this._client = client;
  }
}
