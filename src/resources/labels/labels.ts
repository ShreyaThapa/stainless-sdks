// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as LedgerEntriesAPI from './ledger-entries';
import {
  LedgerEntries,
  LedgerEntryCreateParams,
  LedgerEntryListParams,
  LedgerEntryListResponse,
  LedgerEntryListResponsesOffsetStringPagination,
} from './ledger-entries';

export class Labels extends APIResource {
  ledgerEntries: LedgerEntriesAPI.LedgerEntries = new LedgerEntriesAPI.LedgerEntries(this._client);

  /**
   * Retrieve a label
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<LabelRetrieveResponse> {
    return this._client.get(`/labels/${id}`, options);
  }

  /**
   * Remove a label
   */
  remove(id: string, options?: Core.RequestOptions): Core.APIPromise<LabelRemoveResponse> {
    return this._client.delete(`/labels/${id}`, options);
  }
}

export interface LabelRetrieveResponse {
  id?: string;

  _links?: unknown;

  amount?: LabelRetrieveResponse.Amount;

  created?: string;
}

export namespace LabelRetrieveResponse {
  export interface Amount {
    currency?: string;

    value?: string;
  }
}

export interface LabelRemoveResponse {
  id?: string;

  _links?: unknown;

  amount?: LabelRemoveResponse.Amount;

  created?: string;
}

export namespace LabelRemoveResponse {
  export interface Amount {
    currency?: string;

    value?: string;
  }
}

Labels.LedgerEntries = LedgerEntries;
Labels.LedgerEntryListResponsesOffsetStringPagination = LedgerEntryListResponsesOffsetStringPagination;

export declare namespace Labels {
  export {
    type LabelRetrieveResponse as LabelRetrieveResponse,
    type LabelRemoveResponse as LabelRemoveResponse,
  };

  export {
    LedgerEntries as LedgerEntries,
    type LedgerEntryListResponse as LedgerEntryListResponse,
    LedgerEntryListResponsesOffsetStringPagination as LedgerEntryListResponsesOffsetStringPagination,
    type LedgerEntryCreateParams as LedgerEntryCreateParams,
    type LedgerEntryListParams as LedgerEntryListParams,
  };
}
