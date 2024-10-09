// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as LedgerEntriesAPI from './ledger-entries';

export class LedgerEntries extends APIResource {
  /**
   * Create label ledger entries
   */
  create(id: string, body: LedgerEntryCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/labels/${id}/ledger-entries`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List label ledger entries
   */
  list(
    id: string,
    query?: LedgerEntryListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerEntryListResponse>;
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerEntryListResponse>;
  list(
    id: string,
    query: LedgerEntryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerEntryListResponse> {
    if (isRequestOptions(query)) {
      return this.list(id, {}, query);
    }
    return this._client.get(`/labels/${id}/ledger-entries`, { query, ...options });
  }
}

export interface LedgerEntryListResponse {
  _embedded?: LedgerEntryListResponse._Embedded;

  _links?: Record<string, LedgerEntryListResponse._Links>;

  total?: number;
}

export namespace LedgerEntryListResponse {
  export interface _Embedded {
    'ledger-entries'?: Array<_Embedded.LedgerEntry>;
  }

  export namespace _Embedded {
    export interface LedgerEntry {
      id?: string;

      _links?: unknown;

      amount?: LedgerEntry.Amount;

      created?: string;
    }

    export namespace LedgerEntry {
      export interface Amount {
        currency?: string;

        value?: string;
      }
    }
  }

  export interface _Links {
    href?: string;

    'resource-type'?: string;

    type?: string;
  }
}

export interface LedgerEntryCreateParams {
  amount: LedgerEntryCreateParams.Amount;
}

export namespace LedgerEntryCreateParams {
  export interface Amount {
    currency?: string;

    value?: string;
  }
}

export interface LedgerEntryListParams {
  /**
   * How many results to return
   */
  limit?: string;

  /**
   * How many results to skip
   */
  offset?: string;
}

export namespace LedgerEntries {
  export import LedgerEntryListResponse = LedgerEntriesAPI.LedgerEntryListResponse;
  export import LedgerEntryCreateParams = LedgerEntriesAPI.LedgerEntryCreateParams;
  export import LedgerEntryListParams = LedgerEntriesAPI.LedgerEntryListParams;
}
