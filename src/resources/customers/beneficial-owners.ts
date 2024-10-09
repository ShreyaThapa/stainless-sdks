// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BeneficialOwnersAPI from './beneficial-owners';

export class BeneficialOwners extends APIResource {
  /**
   * Create beneficial owner which is a natural person who, directly or indirectly,
   * owns 25% or more of the equity interests of the company.
   */
  create(
    id: string,
    body: BeneficialOwnerCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/customers/${id}/beneficial-owners`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieve a list of beneficial owners that belong to a Customer
   */
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<BeneficialOwnerListResponse> {
    return this._client.get(`/customers/${id}/beneficial-owners`, options);
  }
}

/**
 * Request model for list beneficial owners
 */
export interface BeneficialOwnerListResponse {
  _embedded?: BeneficialOwnerListResponse._Embedded;

  _links?: Record<string, BeneficialOwnerListResponse._Links>;
}

export namespace BeneficialOwnerListResponse {
  export interface _Embedded {
    'beneficial-owners'?: Array<_Embedded.BeneficialOwner>;
  }

  export namespace _Embedded {
    /**
     * Request body model for a Beneficial Owner
     */
    export interface BeneficialOwner {
      id?: string;

      _links?: unknown;

      address?: BeneficialOwner.Address;

      created?: string;

      firstName?: string;

      lastName?: string;

      verificationStatus?: string;
    }

    export namespace BeneficialOwner {
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
  }

  export interface _Links {
    href?: string;

    'resource-type'?: string;

    type?: string;
  }
}

export type BeneficialOwnerCreateParams =
  | BeneficialOwnerCreateParams.BeneficialOwnerWithSsn
  | BeneficialOwnerCreateParams.BeneficialOwnerWithPassport;

export namespace BeneficialOwnerCreateParams {
  export interface BeneficialOwnerWithSsn {
    address: BeneficialOwnerCreateParams.BeneficialOwnerWithSsn.Address;

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
    address: BeneficialOwnerCreateParams.BeneficialOwnerWithPassport.Address;

    dateOfBirth: string;

    firstName: string;

    lastName: string;

    passport: BeneficialOwnerCreateParams.BeneficialOwnerWithPassport.Passport;
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
  export import BeneficialOwnerListResponse = BeneficialOwnersAPI.BeneficialOwnerListResponse;
  export import BeneficialOwnerCreateParams = BeneficialOwnersAPI.BeneficialOwnerCreateParams;
}
