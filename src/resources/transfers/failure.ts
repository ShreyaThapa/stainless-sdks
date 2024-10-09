// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as FailureAPI from './failure';

export class Failure extends APIResource {
  /**
   * Retrieve a transfer failure reason
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<FailureRetrieveResponse> {
    return this._client.get(`/transfers/${id}/failure`, options);
  }
}

export interface FailureRetrieveResponse {
  _links?: Record<string, FailureRetrieveResponse._Links>;

  code?: string;

  description?: string;

  explanation?: string;
}

export namespace FailureRetrieveResponse {
  export interface _Links {
    href?: string;

    'resource-type'?: string;

    type?: string;
  }
}

export namespace Failure {
  export import FailureRetrieveResponse = FailureAPI.FailureRetrieveResponse;
}
