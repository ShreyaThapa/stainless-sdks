// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as MassPaymentsAPI from './mass-payments';

export class MassPayments extends APIResource {
  /**
   * List mass payments for customer
   */
  list(
    id: string,
    query?: MassPaymentListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MassPaymentListResponse>;
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<MassPaymentListResponse>;
  list(
    id: string,
    query: MassPaymentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MassPaymentListResponse> {
    if (isRequestOptions(query)) {
      return this.list(id, {}, query);
    }
    return this._client.get(`/customers/${id}/mass-payments`, { query, ...options });
  }
}

export interface MassPaymentListResponse {
  _embedded?: MassPaymentListResponse._Embedded;

  _links?: Record<string, MassPaymentListResponse._Links>;

  total?: number;
}

export namespace MassPaymentListResponse {
  export interface _Embedded {
    'mass-payments'?: Array<_Embedded.MassPayment>;
  }

  export namespace _Embedded {
    export interface MassPayment {
      id?: string;

      _links?: Record<string, MassPayment._Links>;

      correlationId?: string;

      created?: string;

      metaData?: unknown;

      status?: string;

      total?: MassPayment.Total;

      totalFees?: MassPayment.TotalFees;
    }

    export namespace MassPayment {
      export interface _Links {
        href?: string;

        'resource-type'?: string;

        type?: string;
      }

      export interface Total {
        currency: string;

        value: string;
      }

      export interface TotalFees {
        currency: string;

        value: string;
      }
    }
  }

  export interface _Links {
    href?: string;

    'resource-type'?: string;

    type?: string;
  }
}

export interface MassPaymentListParams {
  /**
   * A string value to search on if `correlationId` was specified for a transaction
   */
  correlationId?: string;

  /**
   * Number of search results to return. Defaults to 25
   */
  limit?: string;

  /**
   * Number of search results to skip. Use for pagination
   */
  offset?: string;
}

export namespace MassPayments {
  export import MassPaymentListResponse = MassPaymentsAPI.MassPaymentListResponse;
  export import MassPaymentListParams = MassPaymentsAPI.MassPaymentListParams;
}
