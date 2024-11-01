// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import { OffsetStringPagination, type OffsetStringPaginationParams } from '../../pagination';

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
  ): Core.PagePromise<LedgerEntryListResponsesOffsetStringPagination, LedgerEntryListResponse>;
  list(
    id: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerEntryListResponsesOffsetStringPagination, LedgerEntryListResponse>;
  list(
    id: string,
    query: LedgerEntryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerEntryListResponsesOffsetStringPagination, LedgerEntryListResponse> {
    if (isRequestOptions(query)) {
      return this.list(id, {}, query);
    }
    return this._client.getAPIList(
      `/labels/${id}/ledger-entries`,
      LedgerEntryListResponsesOffsetStringPagination,
      { query, ...options },
    );
  }
}

export class LedgerEntryListResponsesOffsetStringPagination extends OffsetStringPagination<LedgerEntryListResponse> {}

export interface LedgerEntryListResponse {
  _embedded?: LedgerEntryListResponse._Embedded;

  _links?: Record<string, Shared.HalLink>;

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

export interface LedgerEntryListParams extends OffsetStringPaginationParams {}

LedgerEntries.LedgerEntryListResponsesOffsetStringPagination = LedgerEntryListResponsesOffsetStringPagination;

export declare namespace LedgerEntries {
  export {
    type LedgerEntryListResponse as LedgerEntryListResponse,
    LedgerEntryListResponsesOffsetStringPagination as LedgerEntryListResponsesOffsetStringPagination,
    type LedgerEntryCreateParams as LedgerEntryCreateParams,
    type LedgerEntryListParams as LedgerEntryListParams,
  };
}
