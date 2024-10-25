// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as DocumentsAPI from './documents';
import * as Shared from './shared';

export class Documents extends APIResource {
  /**
   * Retrieve a document for a customer or beneficial owner
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<DocumentRetrieveResponse> {
    return this._client.get(`/documents/${id}`, options);
  }
}

export interface DocumentRetrieveResponse {
  id?: string;

  _links?: DocumentRetrieveResponse._Links;

  allFailureReasons?: Array<DocumentRetrieveResponse.AllFailureReason>;

  created?: string;

  documentVerificationStatus?: string;

  failureReason?: string;

  status?: string;

  type?: string;
}

export namespace DocumentRetrieveResponse {
  export interface _Links {
    self?: Shared.HalLink;
  }

  export interface AllFailureReason {
    description?: string;

    reason?: string;
  }
}

export namespace Documents {
  export type DocumentRetrieveResponse = DocumentsAPI.DocumentRetrieveResponse;
}
