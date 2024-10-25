// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as OnDemandAuthorizationsAPI from './on-demand-authorizations';

export class OnDemandAuthorizations extends APIResource {
  /**
   * Create an on-demand transfer authorization
   */
  create(options?: Core.RequestOptions): Core.APIPromise<OnDemandAuthorizationCreateResponse> {
    return this._client.post('/on-demand-authorizations', options);
  }
}

export interface OnDemandAuthorizationCreateResponse {
  _links?: OnDemandAuthorizationCreateResponse._Links;

  bodyText?: string;

  buttonText?: string;
}

export namespace OnDemandAuthorizationCreateResponse {
  export interface _Links {
    self?: _Links.Self;
  }

  export namespace _Links {
    export interface Self {
      href?: string;
    }
  }
}

export namespace OnDemandAuthorizations {
  export import OnDemandAuthorizationCreateResponse = OnDemandAuthorizationsAPI.OnDemandAuthorizationCreateResponse;
}
