// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ACHRoutingAPI from './ach-routing';
import { ACHRouting, ACHRoutingRetrieveResponse } from './ach-routing';
import * as BalanceAPI from './balance';
import { Balance, BalanceRetrieveResponse } from './balance';
import * as MicroDepositsAPI from './micro-deposits';
import { MicroDepositInitiateParams, MicroDepositRetrieveResponse, MicroDeposits } from './micro-deposits';

export class FundingSources extends APIResource {
  microDeposits: MicroDepositsAPI.MicroDeposits = new MicroDepositsAPI.MicroDeposits(this._client);
  balance: BalanceAPI.Balance = new BalanceAPI.Balance(this._client);
  achRouting: ACHRoutingAPI.ACHRouting = new ACHRoutingAPI.ACHRouting(this._client);

  /**
   * Create a funding source for an account
   */
  create(body: FundingSourceCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/funding-sources', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieve a funding source
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<FundingSourceRetrieveResponse> {
    return this._client.get(`/funding-sources/${id}`, options);
  }

  /**
   * Update or remove a funding source
   */
  update(
    id: string,
    body: FundingSourceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.post(`/funding-sources/${id}`, { body, ...options });
  }
}

export interface FundingSourceRetrieveResponse {
  id?: string;

  _links?: unknown;

  bankAccountType?: string;

  bankName?: string;

  channels?: Array<string>;

  created?: string;

  fingerprint?: string;

  name?: string;

  removed?: boolean;

  status?: string;

  type?: string;
}

export type FundingSourceUpdateResponse = unknown;

export interface FundingSourceCreateParams {
  accountNumber: string;

  bankAccountType: 'checking' | 'savings';

  name: string;

  routingNumber: string;

  _links?: FundingSourceCreateParams._Links;

  channels?: Array<string>;
}

export namespace FundingSourceCreateParams {
  export interface _Links {
    exchange?: _Links.Exchange;
  }

  export namespace _Links {
    export interface Exchange {
      href?: string;
    }
  }
}

export type FundingSourceUpdateParams =
  | FundingSourceUpdateParams.UpdateUnverifiedBank
  | FundingSourceUpdateParams.UpdateVerifiedBank
  | FundingSourceUpdateParams.RemoveBank;

export namespace FundingSourceUpdateParams {
  export interface UpdateUnverifiedBank {
    name: string;

    accountNumber?: string;

    bankAccountType?: string;

    routingNumber?: string;
  }

  export interface UpdateVerifiedBank {
    name: string;
  }

  export interface RemoveBank {
    removed: boolean;
  }
}

FundingSources.MicroDeposits = MicroDeposits;
FundingSources.Balance = Balance;
FundingSources.ACHRouting = ACHRouting;

export declare namespace FundingSources {
  export {
    type FundingSourceRetrieveResponse as FundingSourceRetrieveResponse,
    type FundingSourceUpdateResponse as FundingSourceUpdateResponse,
    type FundingSourceCreateParams as FundingSourceCreateParams,
    type FundingSourceUpdateParams as FundingSourceUpdateParams,
  };

  export {
    MicroDeposits as MicroDeposits,
    type MicroDepositRetrieveResponse as MicroDepositRetrieveResponse,
    type MicroDepositInitiateParams as MicroDepositInitiateParams,
  };

  export { Balance as Balance, type BalanceRetrieveResponse as BalanceRetrieveResponse };

  export { ACHRouting as ACHRouting, type ACHRoutingRetrieveResponse as ACHRoutingRetrieveResponse };
}
