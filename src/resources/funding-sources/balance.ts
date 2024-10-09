// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BalanceAPI from './balance';

export class Balance extends APIResource {
  /**
   * Retrieve funding source balance
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<BalanceRetrieveResponse> {
    return this._client.get(`/funding-sources/${id}/balance`, options);
  }
}

export interface BalanceRetrieveResponse {
  _links?: Record<string, BalanceRetrieveResponse._Links>;

  balance?: BalanceRetrieveResponse.Balance;

  lastUpdated?: string;

  total?: BalanceRetrieveResponse.Total;
}

export namespace BalanceRetrieveResponse {
  export interface _Links {
    href?: string;

    'resource-type'?: string;

    type?: string;
  }

  export interface Balance {
    currency?: string;

    value?: string;
  }

  export interface Total {
    currency?: string;

    value?: string;
  }
}

export namespace Balance {
  export import BalanceRetrieveResponse = BalanceAPI.BalanceRetrieveResponse;
}
