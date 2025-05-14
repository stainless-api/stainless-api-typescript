// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Configs extends APIResource {
  /**
   * Retrieve configuration files for a project
   */
  retrieve(
    project: string,
    query: ConfigRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConfigRetrieveResponse> {
    return this._client.get(path`/v0/projects/${project}/configs`, { query, ...options });
  }

  /**
   * Generate configuration suggestions based on an OpenAPI spec
   */
  guess(project: string, body: ConfigGuessParams, options?: RequestOptions): APIPromise<ConfigGuessResponse> {
    return this._client.post(path`/v0/projects/${project}/configs/guess`, { body, ...options });
  }
}

/**
 * Config files contents
 */
export type ConfigRetrieveResponse = Record<string, ConfigRetrieveResponse.item>;

export namespace ConfigRetrieveResponse {
  export interface item {
    /**
     * The file content
     */
    content: string;
  }
}

/**
 * Config files contents
 */
export type ConfigGuessResponse = Record<string, ConfigGuessResponse.item>;

export namespace ConfigGuessResponse {
  export interface item {
    /**
     * The file content
     */
    content: string;
  }
}

export interface ConfigRetrieveParams {
  /**
   * Branch name, defaults to "main"
   */
  branch?: string;
}

export interface ConfigGuessParams {
  /**
   * OpenAPI spec
   */
  spec: string;

  /**
   * Branch name
   */
  branch?: string;
}

export declare namespace Configs {
  export {
    type ConfigRetrieveResponse as ConfigRetrieveResponse,
    type ConfigGuessResponse as ConfigGuessResponse,
    type ConfigRetrieveParams as ConfigRetrieveParams,
    type ConfigGuessParams as ConfigGuessParams,
  };
}
