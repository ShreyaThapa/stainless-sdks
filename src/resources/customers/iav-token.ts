// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as IavTokenAPI from './iav-token';

export class IavToken extends APIResource {
  /**
   * Create an IAV token for dwolla.js
   */
  create(id: string, options?: Core.RequestOptions): Core.APIPromise<IavTokenCreateResponse> {
    return this._client.post(`/customers/${id}/iav-token`, options);
  }
}

export interface IavTokenCreateResponse {
  token?: unknown;

  _links?: IavTokenCreateResponse._Links;
}

export namespace IavTokenCreateResponse {
  export interface _Links {
    self?: _Links.Self;
  }

  export namespace _Links {
    export interface Self {
      href?: string;
    }
  }
}

export namespace IavToken {
  export import IavTokenCreateResponse = IavTokenAPI.IavTokenCreateResponse;
}
