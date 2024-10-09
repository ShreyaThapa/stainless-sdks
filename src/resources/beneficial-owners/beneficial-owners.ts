// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BeneficialOwnersAPI from './beneficial-owners';
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

  address?: BeneficialOwnerRetrieveResponse.Address;

  created?: string;

  firstName?: string;

  lastName?: string;

  verificationStatus?: string;
}

export namespace BeneficialOwnerRetrieveResponse {
  export interface Address {
    address1: string;

    city: string;

    country: string;

    stateProvinceRegion: string;

    address2?: string;

    address3?: string;

    postalCode?: string;
  }
}

/**
 * Request body model for a Beneficial Owner
 */
export interface BeneficialOwnerUpdateResponse {
  id?: string;

  _links?: unknown;

  address?: BeneficialOwnerUpdateResponse.Address;

  created?: string;

  firstName?: string;

  lastName?: string;

  verificationStatus?: string;
}

export namespace BeneficialOwnerUpdateResponse {
  export interface Address {
    address1: string;

    city: string;

    country: string;

    stateProvinceRegion: string;

    address2?: string;

    address3?: string;

    postalCode?: string;
  }
}

export type BeneficialOwnerDeleteResponse = unknown;

export type BeneficialOwnerUpdateParams =
  | BeneficialOwnerUpdateParams.BeneficialOwnerWithSsn
  | BeneficialOwnerUpdateParams.BeneficialOwnerWithPassport;

export namespace BeneficialOwnerUpdateParams {
  export interface BeneficialOwnerWithSsn {
    address: BeneficialOwnerUpdateParams.BeneficialOwnerWithSsn.Address;

    dateOfBirth: string;

    firstName: string;

    lastName: string;

    ssn: string;
  }

  export namespace BeneficialOwnerWithSsn {
    export interface Address {
      address1: string;

      city: string;

      country: string;

      stateProvinceRegion: string;

      address2?: string;

      address3?: string;

      postalCode?: string;
    }
  }

  export interface BeneficialOwnerWithPassport {
    address: BeneficialOwnerUpdateParams.BeneficialOwnerWithPassport.Address;

    dateOfBirth: string;

    firstName: string;

    lastName: string;

    passport: BeneficialOwnerUpdateParams.BeneficialOwnerWithPassport.Passport;
  }

  export namespace BeneficialOwnerWithPassport {
    export interface Address {
      address1: string;

      city: string;

      country: string;

      stateProvinceRegion: string;

      address2?: string;

      address3?: string;

      postalCode?: string;
    }

    export interface Passport {
      country: string;

      number: string;
    }
  }
}

export namespace BeneficialOwners {
  export import BeneficialOwnerRetrieveResponse = BeneficialOwnersAPI.BeneficialOwnerRetrieveResponse;
  export import BeneficialOwnerUpdateResponse = BeneficialOwnersAPI.BeneficialOwnerUpdateResponse;
  export import BeneficialOwnerDeleteResponse = BeneficialOwnersAPI.BeneficialOwnerDeleteResponse;
  export import BeneficialOwnerUpdateParams = BeneficialOwnersAPI.BeneficialOwnerUpdateParams;
  export import Documents = DocumentsAPI.Documents;
  export import DocumentListResponse = DocumentsAPI.DocumentListResponse;
  export import DocumentCreateParams = DocumentsAPI.DocumentCreateParams;
}
