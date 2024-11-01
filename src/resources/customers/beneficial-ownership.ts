// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class BeneficialOwnership extends APIResource {
  /**
   * Retrieve beneficial ownership status
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<BeneficialOwnershipRetrieveResponse> {
    return this._client.get(`/customers/${id}/beneficial-ownership`, options);
  }

  /**
   * certify beneficial ownership status
   */
  certify(
    id: string,
    body: BeneficialOwnershipCertifyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BeneficialOwnershipCertifyResponse> {
    return this._client.post(`/customers/${id}/beneficial-ownership`, { body, ...options });
  }
}

export interface BeneficialOwnershipRetrieveResponse {
  _links?: BeneficialOwnershipRetrieveResponse._Links;

  status?: string;
}

export namespace BeneficialOwnershipRetrieveResponse {
  export interface _Links {
    self?: Shared.HalLink;
  }
}

export interface BeneficialOwnershipCertifyResponse {
  _links?: BeneficialOwnershipCertifyResponse._Links;

  status?: string;
}

export namespace BeneficialOwnershipCertifyResponse {
  export interface _Links {
    self?: Shared.HalLink;
  }
}

export interface BeneficialOwnershipCertifyParams {
  status: string;
}

export declare namespace BeneficialOwnership {
  export {
    type BeneficialOwnershipRetrieveResponse as BeneficialOwnershipRetrieveResponse,
    type BeneficialOwnershipCertifyResponse as BeneficialOwnershipCertifyResponse,
    type BeneficialOwnershipCertifyParams as BeneficialOwnershipCertifyParams,
  };
}
