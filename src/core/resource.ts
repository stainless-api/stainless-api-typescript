// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Stainless18 } from '../client';

export abstract class APIResource {
  protected _client: Stainless18;

  constructor(client: Stainless18) {
    this._client = client;
  }
}
