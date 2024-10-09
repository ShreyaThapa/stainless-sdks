// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ACHRoutingAPI from './ach-routing';

export class ACHRouting extends APIResource {
  /**
   * Retrieve account and routing numbers for a VAN (Virtual Account Number)
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ACHRoutingRetrieveResponse> {
    return this._client.get(`/funding-sources/${id}/ach-routing`, options);
  }
}

export interface ACHRoutingRetrieveResponse {
  _links?: Record<string, ACHRoutingRetrieveResponse._Links>;

  accountNumber?: string;

  routingNumber?: string;
}

export namespace ACHRoutingRetrieveResponse {
  export interface _Links {
    href?: string;

    'resource-type'?: string;

    type?: string;
  }
}

export namespace ACHRouting {
  export import ACHRoutingRetrieveResponse = ACHRoutingAPI.ACHRoutingRetrieveResponse;
}
