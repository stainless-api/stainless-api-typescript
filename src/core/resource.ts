// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Stainless12 } from '../client';

export abstract class APIResource {
  protected _client: Stainless12;

  constructor(client: Stainless12) {
    this._client = client;
  }
}
