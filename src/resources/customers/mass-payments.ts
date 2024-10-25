// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as MassPaymentsAPI from './mass-payments';
import * as Shared from '../shared';
import { OffsetStringPagination, type OffsetStringPaginationParams } from '../../pagination';

export class MassPayments extends APIResource {
  /**
   * List mass payments for customer
   */
  list(
    id: string,
    query?: MassPaymentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MassPaymentListResponsesOffsetStringPagination, MassPaymentListResponse>;
  list(
    id: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MassPaymentListResponsesOffsetStringPagination, MassPaymentListResponse>;
  list(
    id: string,
    query: MassPaymentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MassPaymentListResponsesOffsetStringPagination, MassPaymentListResponse> {
    if (isRequestOptions(query)) {
      return this.list(id, {}, query);
    }
    return this._client.getAPIList(
      `/customers/${id}/mass-payments`,
      MassPaymentListResponsesOffsetStringPagination,
      { query, ...options },
    );
  }
}

export class MassPaymentListResponsesOffsetStringPagination extends OffsetStringPagination<MassPaymentListResponse> {}

export interface MassPaymentListResponse {
  _embedded?: MassPaymentListResponse._Embedded;

  _links?: Record<string, Shared.HalLink>;

  total?: number;
}

export namespace MassPaymentListResponse {
  export interface _Embedded {
    'mass-payments'?: Array<_Embedded.MassPayment>;
  }

  export namespace _Embedded {
    export interface MassPayment {
      id?: string;

      _links?: Record<string, Shared.HalLink>;

      correlationId?: string;

      created?: string;

      metaData?: unknown;

      status?: string;

      total?: Shared.TransferAmount;

      totalFees?: Shared.TransferAmount;
    }
  }
}

export interface MassPaymentListParams extends OffsetStringPaginationParams {
  /**
   * A string value to search on if `correlationId` was specified for a transaction
   */
  correlationId?: string;
}

export namespace MassPayments {
  export type MassPaymentListResponse = MassPaymentsAPI.MassPaymentListResponse;
  export import MassPaymentListResponsesOffsetStringPagination = MassPaymentsAPI.MassPaymentListResponsesOffsetStringPagination;
  export type MassPaymentListParams = MassPaymentsAPI.MassPaymentListParams;
}
