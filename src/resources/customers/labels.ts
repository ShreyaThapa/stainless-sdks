// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as LabelsAPI from './labels';
import { OffsetStringPagination, type OffsetStringPaginationParams } from '../../pagination';

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
  ): Core.PagePromise<LabelListResponsesOffsetStringPagination, LabelListResponse>;
  list(
    id: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LabelListResponsesOffsetStringPagination, LabelListResponse>;
  list(
    id: string,
    query: LabelListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LabelListResponsesOffsetStringPagination, LabelListResponse> {
    if (isRequestOptions(query)) {
      return this.list(id, {}, query);
    }
    return this._client.getAPIList(`/customers/${id}/labels`, LabelListResponsesOffsetStringPagination, {
      query,
      ...options,
    });
  }
}

export class LabelListResponsesOffsetStringPagination extends OffsetStringPagination<LabelListResponse> {}

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

export interface LabelListParams extends OffsetStringPaginationParams {}

export namespace Labels {
  export type LabelListResponse = LabelsAPI.LabelListResponse;
  export import LabelListResponsesOffsetStringPagination = LabelsAPI.LabelListResponsesOffsetStringPagination;
  export type LabelCreateParams = LabelsAPI.LabelCreateParams;
  export type LabelListParams = LabelsAPI.LabelListParams;
}
