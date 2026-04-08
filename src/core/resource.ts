// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Stainless7 } from '../client';

export abstract class APIResource {
  protected _client: Stainless7;

  constructor(client: Stainless7) {
    this._client = client;
  }
}
