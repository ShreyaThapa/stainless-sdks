// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class MicroDeposits extends APIResource {
  /**
   * Retrieve micro-deposits details
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<MicroDepositRetrieveResponse> {
    return this._client.get(`/funding-sources/${id}/micro-deposits`, options);
  }

  /**
   * Initiate or Verify micro-deposits
   */
  initiate(
    id: string,
    body: MicroDepositInitiateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/funding-sources/${id}/micro-deposits`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface MicroDepositRetrieveResponse {
  _links?: Record<string, Shared.HalLink>;

  created?: string;

  failure?: MicroDepositRetrieveResponse.Failure;

  status?: string;
}

export namespace MicroDepositRetrieveResponse {
  export interface Failure {
    code?: string;

    description?: string;
  }
}

export type MicroDepositInitiateParams =
  | MicroDepositInitiateParams.InitiateMicroDeposits
  | MicroDepositInitiateParams.VerifyMicroDeposits;

export namespace MicroDepositInitiateParams {
  export type InitiateMicroDeposits = unknown;

  export interface VerifyMicroDeposits {
    amount1: MicroDepositInitiateParams.VerifyMicroDeposits.Amount1;

    amount2: MicroDepositInitiateParams.VerifyMicroDeposits.Amount2;
  }

  export namespace VerifyMicroDeposits {
    export interface Amount1 {
      currency: string;

      value: string;
    }

    export interface Amount2 {
      currency: string;

      value: string;
    }
  }
}

export declare namespace MicroDeposits {
  export {
    type MicroDepositRetrieveResponse as MicroDepositRetrieveResponse,
    type MicroDepositInitiateParams as MicroDepositInitiateParams,
  };
}
