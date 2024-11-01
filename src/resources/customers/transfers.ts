// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import { OffsetStringPagination, type OffsetStringPaginationParams } from '../../pagination';

export class Transfers extends APIResource {
  /**
   * List and search transfers for a customer
   */
  list(
    id: string,
    query?: TransferListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TransferListResponsesOffsetStringPagination, TransferListResponse>;
  list(
    id: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TransferListResponsesOffsetStringPagination, TransferListResponse>;
  list(
    id: string,
    query: TransferListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TransferListResponsesOffsetStringPagination, TransferListResponse> {
    if (isRequestOptions(query)) {
      return this.list(id, {}, query);
    }
    return this._client.getAPIList(
      `/customers/${id}/transfers`,
      TransferListResponsesOffsetStringPagination,
      { query, ...options },
    );
  }
}

export class TransferListResponsesOffsetStringPagination extends OffsetStringPagination<TransferListResponse> {}

export interface TransferListResponse {
  _embedded?: TransferListResponse._Embedded;

  _links?: unknown;

  total?: number;
}

export namespace TransferListResponse {
  export interface _Embedded {
    transfers?: Array<_Embedded.Transfer>;
  }

  export namespace _Embedded {
    export interface Transfer {
      id?: string;

      _links?: Record<string, Shared.HalLink>;

      achDetails?: Transfer.ACHDetails;

      amount?: Transfer.Amount;

      clearing?: Transfer.Clearing;

      correlationId?: string;

      created?: string;

      metadata?: Transfer.Metadata;

      processingChannel?: Transfer.ProcessingChannel;

      rtpDetails?: Transfer.RtpDetails;

      status?: string;
    }

    export namespace Transfer {
      export interface ACHDetails {
        destination?: ACHDetails.Destination;

        source?: ACHDetails.Source;
      }

      export namespace ACHDetails {
        export interface Destination {
          addenda?: Destination.Addenda;
        }

        export namespace Destination {
          export interface Addenda {
            values?: Array<string>;
          }
        }

        export interface Source {
          addenda?: Source.Addenda;
        }

        export namespace Source {
          export interface Addenda {
            values?: Array<string>;
          }
        }
      }

      export interface Amount {
        currency?: string;

        value?: string;
      }

      export interface Clearing {
        destination?: string;

        source?: string;
      }

      export interface Metadata {
        note?: string;

        paymentId?: string;
      }

      export interface ProcessingChannel {
        destination?: string;
      }

      export interface RtpDetails {
        destination?: RtpDetails.Destination;
      }

      export namespace RtpDetails {
        export interface Destination {
          remittanceData?: string;
        }
      }
    }
  }
}

export interface TransferListParams extends OffsetStringPaginationParams {
  /**
   * A string value to search on if `correlationId` was specified for a transaction
   */
  correlationId?: string;

  /**
   * Only include transactions with an amount equal to or less than `endAmount`
   */
  endAmount?: string;

  /**
   * Only include transactions created before this date. ISO-8601 format `YYYY-MM-DD`
   */
  endDate?: string;

  /**
   * A string to search on fields `firstName`, `lastName`, `email`, `businessName`
   */
  search?: string;

  /**
   * Only include transactions with an amount equal to or greater than `startAmount`
   */
  startAmount?: string;

  /**
   * Only include transactions created after this date. ISO-8601 format `YYYY-MM-DD`
   */
  startDate?: string;

  /**
   * Filter on transaction status. Possible values are `pending`, `processed`,
   * `failed`, or `cancelled`
   */
  status?: string;
}

Transfers.TransferListResponsesOffsetStringPagination = TransferListResponsesOffsetStringPagination;

export declare namespace Transfers {
  export {
    type TransferListResponse as TransferListResponse,
    TransferListResponsesOffsetStringPagination as TransferListResponsesOffsetStringPagination,
    type TransferListParams as TransferListParams,
  };
}
