// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Documents extends APIResource {
  /**
   * Create a document for customer
   */
  create(id: string, body: DocumentCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(
      `/customers/${id}/documents`,
      Core.multipartFormRequestOptions({ body, ...options, headers: { Accept: '*/*', ...options?.headers } }),
    );
  }

  /**
   * List documents for customer
   */
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<DocumentListResponse> {
    return this._client.get(`/customers/${id}/documents`, options);
  }
}

export interface DocumentListResponse {
  _embedded?: DocumentListResponse._Embedded;

  _links?: Record<string, Shared.HalLink>;

  total?: number;
}

export namespace DocumentListResponse {
  export interface _Embedded {
    documents?: Array<_Embedded.Document>;
  }

  export namespace _Embedded {
    export interface Document {
      id?: string;

      _links?: Document._Links;

      allFailureReasons?: Array<Document.AllFailureReason>;

      created?: string;

      documentVerificationStatus?: string;

      failureReason?: string;

      status?: string;

      type?: string;
    }

    export namespace Document {
      export interface _Links {
        self?: Shared.HalLink;
      }

      export interface AllFailureReason {
        description?: string;

        reason?: string;
      }
    }
  }
}

export interface DocumentCreateParams {
  documentType?: string;

  file?: Core.Uploadable;
}

export declare namespace Documents {
  export {
    type DocumentListResponse as DocumentListResponse,
    type DocumentCreateParams as DocumentCreateParams,
  };
}
