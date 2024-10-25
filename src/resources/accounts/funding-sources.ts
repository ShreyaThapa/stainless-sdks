// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as FundingSourcesAPI from './funding-sources';

export class FundingSources extends APIResource {
  /**
   * List funding source for an account
   */
  list(
    id: string,
    query?: FundingSourceListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FundingSourceListResponse>;
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<FundingSourceListResponse>;
  list(
    id: string,
    query: FundingSourceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FundingSourceListResponse> {
    if (isRequestOptions(query)) {
      return this.list(id, {}, query);
    }
    return this._client.get(`/accounts/${id}/funding-sources`, { query, ...options });
  }
}

export interface FundingSourceListResponse {
  _embedded?: FundingSourceListResponse._Embedded;

  _links?: unknown;

  total?: number;
}

export namespace FundingSourceListResponse {
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

export interface FundingSourceListParams {
  /**
   * Filter removed funding sources. Boolean value. Defaults to `true`
   */
  removed?: string;
}

export namespace FundingSources {
  export type FundingSourceListResponse = FundingSourcesAPI.FundingSourceListResponse;
  export type FundingSourceListParams = FundingSourcesAPI.FundingSourceListParams;
}
