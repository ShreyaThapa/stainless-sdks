// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as LabelReallocationsAPI from './label-reallocations';

export class LabelReallocations extends APIResource {
  /**
   * Create a label reallocation
   */
  create(body: LabelReallocationCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/label-reallocations', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieve a label reallocation
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<LabelReallocationRetrieveResponse> {
    return this._client.get(`/label-reallocations/${id}`, options);
  }
}

export interface LabelReallocationRetrieveResponse {
  _links?: LabelReallocationRetrieveResponse._Links;

  created?: string;
}

export namespace LabelReallocationRetrieveResponse {
  export interface _Links {
    'from-ledger-entry'?: _Links.FromLedgerEntry;

    self?: _Links.Self;

    'to-ledger-entry'?: _Links.ToLedgerEntry;
  }

  export namespace _Links {
    export interface FromLedgerEntry {
      href?: string;

      'resource-type'?: string;

      type?: string;
    }

    export interface Self {
      href?: string;

      'resource-type'?: string;

      type?: string;
    }

    export interface ToLedgerEntry {
      href?: string;

      'resource-type'?: string;

      type?: string;
    }
  }
}

export interface LabelReallocationCreateParams {
  _links: LabelReallocationCreateParams._Links;

  amount: LabelReallocationCreateParams.Amount;
}

export namespace LabelReallocationCreateParams {
  export interface _Links {
    from?: _Links.From;

    to?: _Links.To;
  }

  export namespace _Links {
    export interface From {
      href?: string;
    }

    export interface To {
      href?: string;
    }
  }

  export interface Amount {
    currency?: string;

    value?: string;
  }
}

export namespace LabelReallocations {
  export type LabelReallocationRetrieveResponse = LabelReallocationsAPI.LabelReallocationRetrieveResponse;
  export type LabelReallocationCreateParams = LabelReallocationsAPI.LabelReallocationCreateParams;
}
