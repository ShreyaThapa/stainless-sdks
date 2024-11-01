// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class FundingSourcesToken extends APIResource {
  /**
   * Create a funding sources token for dwolla.js
   */
  create(id: string, options?: Core.RequestOptions): Core.APIPromise<FundingSourcesTokenCreateResponse> {
    return this._client.post(`/customers/${id}/funding-sources-token`, options);
  }
}

export interface FundingSourcesTokenCreateResponse {
  token?: unknown;

  _links?: FundingSourcesTokenCreateResponse._Links;
}

export namespace FundingSourcesTokenCreateResponse {
  export interface _Links {
    self?: _Links.Self;
  }

  export namespace _Links {
    export interface Self {
      href?: string;
    }
  }
}

export declare namespace FundingSourcesToken {
  export { type FundingSourcesTokenCreateResponse as FundingSourcesTokenCreateResponse };
}
