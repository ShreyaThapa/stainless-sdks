// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AccountsAPI from './accounts';
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

  _links?: Record<string, AccountRetrieveResponse._Links>;

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
  export interface _Links {
    href?: string;

    'resource-type'?: string;

    type?: string;
  }

  export interface Address {
    address1: string;

    city: string;

    postalCode: string;

    state: string;

    address2?: string;
  }
}

export namespace Accounts {
  export import AccountRetrieveResponse = AccountsAPI.AccountRetrieveResponse;
  export import FundingSources = FundingSourcesAPI.FundingSources;
  export import FundingSourceListResponse = FundingSourcesAPI.FundingSourceListResponse;
  export import FundingSourceListParams = FundingSourcesAPI.FundingSourceListParams;
  export import Transfers = TransfersAPI.Transfers;
  export import TransferListResponse = TransfersAPI.TransferListResponse;
  export import TransferListParams = TransfersAPI.TransferListParams;
  export import MassPayments = MassPaymentsAPI.MassPayments;
  export import MassPaymentListResponse = MassPaymentsAPI.MassPaymentListResponse;
  export import MassPaymentListParams = MassPaymentsAPI.MassPaymentListParams;
}
