// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as FeesAPI from './fees';

export class Fees extends APIResource {
  /**
   * List fees for a transfer
   */
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<FeeListResponse> {
    return this._client.get(`/transfers/${id}/fees`, options);
  }
}

export interface FeeListResponse {
  total?: string;

  transactions?: Array<FeeListResponse.Transaction>;
}

export namespace FeeListResponse {
  export interface Transaction {
    id?: string;

    _links?: Record<string, Transaction._Links>;

    amount?: Transaction.Amount;

    created?: string;

    status?: string;
  }

  export namespace Transaction {
    export interface _Links {
      href?: string;

      'resource-type'?: string;

      type?: string;
    }

    export interface Amount {
      currency?: string;

      value?: string;
    }
  }
}

export namespace Fees {
  export import FeeListResponse = FeesAPI.FeeListResponse;
}
