// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Balance extends APIResource {
  /**
   * Retrieve funding source balance
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<BalanceRetrieveResponse> {
    return this._client.get(`/funding-sources/${id}/balance`, options);
  }
}

export interface BalanceRetrieveResponse {
  _links?: Record<string, Shared.HalLink>;

  balance?: BalanceRetrieveResponse.Balance;

  lastUpdated?: string;

  total?: BalanceRetrieveResponse.Total;
}

export namespace BalanceRetrieveResponse {
  export interface Balance {
    currency?: string;

    value?: string;
  }

  export interface Total {
    currency?: string;

    value?: string;
  }
}

export declare namespace Balance {
  export { type BalanceRetrieveResponse as BalanceRetrieveResponse };
}
