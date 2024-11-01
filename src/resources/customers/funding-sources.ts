// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class FundingSources extends APIResource {
  /**
   * Create customer funding source for a Customer
   */
  create(id: string, body: FundingSourceCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/customers/${id}/funding-sources`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List customer funding sources
   */
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<FundingSourceListResponse> {
    return this._client.get(`/customers/${id}/funding-sources`, options);
  }
}

export type FundingSourceListResponse = Array<FundingSourceListResponse.FundingSourceListResponseItem>;

export namespace FundingSourceListResponse {
  export interface FundingSourceListResponseItem {
    _embedded?: FundingSourceListResponseItem._Embedded;

    _links?: unknown;

    total?: number;
  }

  export namespace FundingSourceListResponseItem {
    export interface _Embedded {
      'funding-sources'?: Array<_Embedded.FundingSource>;
    }

    export namespace _Embedded {
      export interface FundingSource {
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
    }
  }
}

export type FundingSourceCreateParams =
  | FundingSourceCreateParams.CreateUnverifiedBank
  | FundingSourceCreateParams.CreatePlaidBank
  | FundingSourceCreateParams.CreateVan;

export namespace FundingSourceCreateParams {
  export interface CreateUnverifiedBank {
    accountNumber: string;

    bankAccountType: 'checking' | 'savings';

    name: string;

    routingNumber: string;

    _links?: FundingSourceCreateParams.CreateUnverifiedBank._Links;

    channels?: Array<string>;
  }

  export namespace CreateUnverifiedBank {
    export interface _Links {
      exchange?: _Links.Exchange;
    }

    export namespace _Links {
      export interface Exchange {
        href?: string;
      }
    }
  }

  export interface CreatePlaidBank {
    name: string;

    plaidToken: string;

    _links?: FundingSourceCreateParams.CreatePlaidBank._Links;
  }

  export namespace CreatePlaidBank {
    export interface _Links {
      'on-demand-authorization'?: _Links.OnDemandAuthorization;
    }

    export namespace _Links {
      export interface OnDemandAuthorization {
        href?: string;
      }
    }
  }

  export interface CreateVan {
    bankAccountType: string;

    name: string;

    type: string;
  }
}

export declare namespace FundingSources {
  export {
    type FundingSourceListResponse as FundingSourceListResponse,
    type FundingSourceCreateParams as FundingSourceCreateParams,
  };
}
