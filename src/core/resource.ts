// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Stainless11 } from '../client';

export abstract class APIResource {
  protected _client: Stainless11;

  constructor(client: Stainless11) {
    this._client = client;
  }
}
