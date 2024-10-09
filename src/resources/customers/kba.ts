// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Kba extends APIResource {
  /**
   * Initiate a KBA session
   */
  initiate(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/customers/${id}/kba`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
