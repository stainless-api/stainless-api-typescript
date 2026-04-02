// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Stainless2 } from '../client';

export abstract class APIResource {
  protected _client: Stainless2;

  constructor(client: Stainless2) {
    this._client = client;
  }
}
