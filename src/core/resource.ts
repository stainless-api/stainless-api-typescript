// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Stainless4 } from '../client';

export abstract class APIResource {
  protected _client: Stainless4;

  constructor(client: Stainless4) {
    this._client = client;
  }
}
