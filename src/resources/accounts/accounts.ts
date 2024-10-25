// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AccountsAPI from './accounts';
import * as Shared from '../shared';
import * as FundingSourcesAPI from './funding-sources';
import * as MassPaymentsAPI from './mass-payments';
import * as TransfersAPI from './transfers';

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

export namespace Accounts {
  export type AccountRetrieveResponse = AccountsAPI.AccountRetrieveResponse;
  export import FundingSources = FundingSourcesAPI.FundingSources;
  export type FundingSourceListResponse = FundingSourcesAPI.FundingSourceListResponse;
  export type FundingSourceListParams = FundingSourcesAPI.FundingSourceListParams;
  export import Transfers = TransfersAPI.Transfers;
  export type TransferListResponse = TransfersAPI.TransferListResponse;
  export import TransferListResponsesOffsetStringPagination = TransfersAPI.TransferListResponsesOffsetStringPagination;
  export type TransferListParams = TransfersAPI.TransferListParams;
  export import MassPayments = MassPaymentsAPI.MassPayments;
  export type MassPaymentListResponse = MassPaymentsAPI.MassPaymentListResponse;
  export import MassPaymentListResponsesOffsetIntegerPagination = MassPaymentsAPI.MassPaymentListResponsesOffsetIntegerPagination;
  export type MassPaymentListParams = MassPaymentsAPI.MassPaymentListParams;
}
