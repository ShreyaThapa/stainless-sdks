// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Failure extends APIResource {
  /**
   * Retrieve a transfer failure reason
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<FailureRetrieveResponse> {
    return this._client.get(`/transfers/${id}/failure`, options);
  }
}

export interface FailureRetrieveResponse {
  _links?: Record<string, Shared.HalLink>;

  code?: string;

  description?: string;

  explanation?: string;
}

export declare namespace Failure {
  export { type FailureRetrieveResponse as FailureRetrieveResponse };
}
