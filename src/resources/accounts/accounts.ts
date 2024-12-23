// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as FundingSourcesAPI from './funding-sources';
import { FundingSourceListParams, FundingSourceListResponse, FundingSources } from './funding-sources';
import * as MassPaymentsAPI from './mass-payments';
import {
  MassPaymentListParams,
  MassPaymentListResponse,
  MassPaymentListResponsesOffsetIntegerPagination,
  MassPayments,
} from './mass-payments';
import * as TransfersAPI from './transfers';
import {
  TransferListParams,
  TransferListResponse,
  TransferListResponsesOffsetStringPagination,
  Transfers,
} from './transfers';

export class Accounts extends APIResource {
  fundingSources: FundingSourcesAPI.FundingSources = new FundingSourcesAPI.FundingSources(this._client);
  transfers: TransfersAPI.Transfers = new TransfersAPI.Transfers(this._client);
  massPayments: MassPaymentsAPI.MassPayments = new MassPaymentsAPI.MassPayments(this._client);

  /**
   * Retrieve basic account information belonging to the authorized Dwolla account.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<AccountRetrieveResponse> {
    return this._client.get(`/accounts/${id}`, options);
  }
}

export interface AccountRetrieveResponse {
  id?: string;

  _links?: Record<string, Shared.HalLink>;

  address?: AccountRetrieveResponse.Address;

  authorizedRep?: string;

  created?: string;

  email?: string;

  name?: string;

  ownershipCertificationStatus?: string;

  ownershipStatus?: string;

  phone?: string;

  timezoneOffset?: number;

  type?: string;

  verificationStatus?: string;
}

export namespace AccountRetrieveResponse {
  export interface Address {
    address1: string;

    city: string;

    postalCode: string;

    state: string;

    address2?: string;
  }
}

Accounts.FundingSources = FundingSources;
Accounts.Transfers = Transfers;
Accounts.TransferListResponsesOffsetStringPagination = TransferListResponsesOffsetStringPagination;
Accounts.MassPayments = MassPayments;
Accounts.MassPaymentListResponsesOffsetIntegerPagination = MassPaymentListResponsesOffsetIntegerPagination;

export declare namespace Accounts {
  export { type AccountRetrieveResponse as AccountRetrieveResponse };

  export {
    FundingSources as FundingSources,
    type FundingSourceListResponse as FundingSourceListResponse,
    type FundingSourceListParams as FundingSourceListParams,
  };

  export {
    Transfers as Transfers,
    type TransferListResponse as TransferListResponse,
    TransferListResponsesOffsetStringPagination as TransferListResponsesOffsetStringPagination,
    type TransferListParams as TransferListParams,
  };

  export {
    MassPayments as MassPayments,
    type MassPaymentListResponse as MassPaymentListResponse,
    MassPaymentListResponsesOffsetIntegerPagination as MassPaymentListResponsesOffsetIntegerPagination,
    type MassPaymentListParams as MassPaymentListParams,
  };
}
