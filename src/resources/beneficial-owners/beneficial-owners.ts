// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BeneficialOwnersAPI from './beneficial-owners';
import * as Shared from '../shared';
import * as DocumentsAPI from './documents';

export class BeneficialOwners extends APIResource {
  documents: DocumentsAPI.Documents = new DocumentsAPI.Documents(this._client);

  /**
   * Retrieve details for a single beneficial owner
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<BeneficialOwnerRetrieveResponse> {
    return this._client.get(`/beneficial-owners/${id}`, options);
  }

  /**
   * Update beneficial owner
   */
  update(
    id: string,
    body: BeneficialOwnerUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BeneficialOwnerUpdateResponse> {
    return this._client.post(`/beneficial-owners/${id}`, { body, ...options });
  }

  /**
   * Delete beneficial owner
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/beneficial-owners/${id}`, options);
  }
}

/**
 * Request body model for a Beneficial Owner
 */
export interface BeneficialOwnerRetrieveResponse {
  id?: string;

  _links?: unknown;

  address?: Shared.InternationalAddress;

  created?: string;

  firstName?: string;

  lastName?: string;

  verificationStatus?: string;
}

/**
 * Request body model for a Beneficial Owner
 */
export interface BeneficialOwnerUpdateResponse {
  id?: string;

  _links?: unknown;

  address?: Shared.InternationalAddress;

  created?: string;

  firstName?: string;

  lastName?: string;

  verificationStatus?: string;
}

export type BeneficialOwnerDeleteResponse = unknown;

export type BeneficialOwnerUpdateParams =
  | BeneficialOwnerUpdateParams.BeneficialOwnerWithSsn
  | BeneficialOwnerUpdateParams.BeneficialOwnerWithPassport;

export namespace BeneficialOwnerUpdateParams {
  export interface BeneficialOwnerWithSsn {
    address: Shared.InternationalAddress;

    dateOfBirth: string;

    firstName: string;

    lastName: string;

    ssn: string;
  }

  export interface BeneficialOwnerWithPassport {
    address: Shared.InternationalAddress;

    dateOfBirth: string;

    firstName: string;

    lastName: string;

    passport: Shared.Passport;
  }
}

export namespace BeneficialOwners {
  export type BeneficialOwnerRetrieveResponse = BeneficialOwnersAPI.BeneficialOwnerRetrieveResponse;
  export type BeneficialOwnerUpdateResponse = BeneficialOwnersAPI.BeneficialOwnerUpdateResponse;
  export type BeneficialOwnerDeleteResponse = BeneficialOwnersAPI.BeneficialOwnerDeleteResponse;
  export type BeneficialOwnerUpdateParams = BeneficialOwnersAPI.BeneficialOwnerUpdateParams;
  export import Documents = DocumentsAPI.Documents;
  export type DocumentListResponse = DocumentsAPI.DocumentListResponse;
  export type DocumentCreateParams = DocumentsAPI.DocumentCreateParams;
}
