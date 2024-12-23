// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Root extends APIResource {
  /**
   * The entry point that clients can use to discover and explore the entire API.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<RootListResponse> {
    return this._client.get('/', options);
  }
}

export interface RootListResponse {
  _links?: Record<string, Shared.HalLink>;
}

export declare namespace Root {
  export { type RootListResponse as RootListResponse };
}
