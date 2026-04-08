// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Stainless5 } from '../client';

export abstract class APIResource {
  protected _client: Stainless5;

  constructor(client: Stainless5) {
    this._client = client;
  }
}
