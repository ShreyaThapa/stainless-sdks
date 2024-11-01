// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class LedgerEntries extends APIResource {
  /**
   * Retrieve a label ledger entry
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerEntryRetrieveResponse> {
    return this._client.get(`/ledger-entries/${id}`, options);
  }
}

export interface LedgerEntryRetrieveResponse {
  id?: string;

  _links?: unknown;

  amount?: LedgerEntryRetrieveResponse.Amount;

  created?: string;
}

export namespace LedgerEntryRetrieveResponse {
  export interface Amount {
    currency?: string;

    value?: string;
  }
}

export declare namespace LedgerEntries {
  export { type LedgerEntryRetrieveResponse as LedgerEntryRetrieveResponse };
}
