// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Stainless15 } from '../client';

export abstract class APIResource {
  protected _client: Stainless15;

  constructor(client: Stainless15) {
    this._client = client;
  }
}
