// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Stainless17 } from '../client';

export abstract class APIResource {
  protected _client: Stainless17;

  constructor(client: Stainless17) {
    this._client = client;
  }
}
