// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as LabelsAPI from './labels';

export class Labels extends APIResource {
  /**
   * Create a label for a customer
   */
  create(id: string, body: LabelCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/customers/${id}/labels`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List labels for a customer
   */
  list(
    id: string,
    query?: LabelListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LabelListResponse>;
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<LabelListResponse>;
  list(
    id: string,
    query: LabelListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LabelListResponse> {
    if (isRequestOptions(query)) {
      return this.list(id, {}, query);
    }
    return this._client.get(`/customers/${id}/labels`, { query, ...options });
  }
}

export interface LabelListResponse {
  _embedded?: LabelListResponse._Embedded;

  _links?: unknown;

  total?: number;
}

export namespace LabelListResponse {
  export interface _Embedded {
    labels?: Array<_Embedded.Label>;
  }

  export namespace _Embedded {
    export interface Label {
      id?: string;

      _links?: unknown;

      amount?: Label.Amount;

      created?: string;
    }

    export namespace Label {
      export interface Amount {
        currency?: string;

        value?: string;
      }
    }
  }
}

export interface LabelCreateParams {
  amount: LabelCreateParams.Amount;
}

export namespace LabelCreateParams {
  export interface Amount {
    currency?: string;

    value?: string;
  }
}

export interface LabelListParams {
  /**
   * How many results to return
   */
  limit?: string;

  /**
   * How many results to skip
   */
  offset?: string;
}

export namespace Labels {
  export import LabelListResponse = LabelsAPI.LabelListResponse;
  export import LabelCreateParams = LabelsAPI.LabelCreateParams;
  export import LabelListParams = LabelsAPI.LabelListParams;
}
