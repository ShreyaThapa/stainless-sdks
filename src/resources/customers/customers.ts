// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as CustomersAPI from './customers';
import * as Shared from '../shared';
import * as BeneficialOwnersAPI from './beneficial-owners';
import {
  BeneficialOwnerCreateParams,
  BeneficialOwnerListResponse,
  BeneficialOwners,
} from './beneficial-owners';
import * as BeneficialOwnershipAPI from './beneficial-ownership';
import {
  BeneficialOwnership,
  BeneficialOwnershipCertifyParams,
  BeneficialOwnershipCertifyResponse,
  BeneficialOwnershipRetrieveResponse,
} from './beneficial-ownership';
import * as DocumentsAPI from './documents';
import { DocumentCreateParams, DocumentListResponse, Documents } from './documents';
import * as ExchangesAPI from './exchanges';
import { ExchangeCreateParams, ExchangeListResponse, Exchanges } from './exchanges';
import * as FundingSourcesAPI from './funding-sources';
import { FundingSourceCreateParams, FundingSourceListResponse, FundingSources } from './funding-sources';
import * as FundingSourcesTokenAPI from './funding-sources-token';
import { FundingSourcesToken, FundingSourcesTokenCreateResponse } from './funding-sources-token';
import * as IavTokenAPI from './iav-token';
import { IavToken, IavTokenCreateResponse } from './iav-token';
import * as KbaAPI from './kba';
import { Kba } from './kba';
import * as LabelsAPI from './labels';
import {
  LabelCreateParams,
  LabelListParams,
  LabelListResponse,
  LabelListResponsesOffsetStringPagination,
  Labels,
} from './labels';
import * as MassPaymentsAPI from './mass-payments';
import {
  MassPaymentListParams,
  MassPaymentListResponse,
  MassPaymentListResponsesOffsetStringPagination,
  MassPayments,
} from './mass-payments';
import * as TransfersAPI from './transfers';
import {
  TransferListParams,
  TransferListResponse,
  TransferListResponsesOffsetStringPagination,
  Transfers,
} from './transfers';
import { OffsetStringPagination, type OffsetStringPaginationParams } from '../../pagination';

export class Customers extends APIResource {
  beneficialOwners: BeneficialOwnersAPI.BeneficialOwners = new BeneficialOwnersAPI.BeneficialOwners(
    this._client,
  );
  beneficialOwnership: BeneficialOwnershipAPI.BeneficialOwnership =
    new BeneficialOwnershipAPI.BeneficialOwnership(this._client);
  documents: DocumentsAPI.Documents = new DocumentsAPI.Documents(this._client);
  kba: KbaAPI.Kba = new KbaAPI.Kba(this._client);
  fundingSources: FundingSourcesAPI.FundingSources = new FundingSourcesAPI.FundingSources(this._client);
  fundingSourcesToken: FundingSourcesTokenAPI.FundingSourcesToken =
    new FundingSourcesTokenAPI.FundingSourcesToken(this._client);
  iavToken: IavTokenAPI.IavToken = new IavTokenAPI.IavToken(this._client);
  transfers: TransfersAPI.Transfers = new TransfersAPI.Transfers(this._client);
  massPayments: MassPaymentsAPI.MassPayments = new MassPaymentsAPI.MassPayments(this._client);
  labels: LabelsAPI.Labels = new LabelsAPI.Labels(this._client);
  exchanges: ExchangesAPI.Exchanges = new ExchangesAPI.Exchanges(this._client);

  /**
   * Create an unverified customer, verified customer, or receive-only user.
   */
  create(body: CustomerCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/customers', {
      body,
      ...options,
      headers: { 'Content-Type': 'application/vnd.dwolla.v1.hal+json', Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieve details for a single customer
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<CustomerRetrieveResponse> {
    return this._client.get(`/customers/${id}`, options);
  }

  /**
   * Update Customer information, upgrade an unverified Customer to a verified
   * Customer, suspend a Customer, deactivate a Customer, reactivate a Customer, and
   * update a verified Customer's information to retry verification.
   */
  update(
    id: string,
    body?: CustomerUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerUpdateResponse>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<CustomerUpdateResponse>;
  update(
    id: string,
    body: CustomerUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.post(`/customers/${id}`, { body, ...options });
  }

  /**
   * List and search customers allowing you to filter by email and status, as well as
   * search on key fields such as firstName, lastName, and businessName.
   */
  list(
    query?: CustomerListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerListResponsesOffsetStringPagination, CustomerListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerListResponsesOffsetStringPagination, CustomerListResponse>;
  list(
    query: CustomerListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerListResponsesOffsetStringPagination, CustomerListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/customers', CustomerListResponsesOffsetStringPagination, {
      query,
      ...options,
    });
  }
}

export class CustomerListResponsesOffsetStringPagination extends OffsetStringPagination<CustomerListResponse> {}

/**
 * Controller JSON Object for Customer responses
 */
export interface Controller {
  address?: Controller.Address;

  firstName?: string;

  lastName?: string;

  title?: string;
}

export namespace Controller {
  export interface Address {
    address1?: string;

    address2?: string;

    address3?: string;

    city?: string;

    country?: string;

    postalCode?: string;

    stateProvinceRegion?: string;
  }
}

/**
 * Shared models between all Customer types
 */
export interface UnverifiedBusinessCustomer extends UnverifiedCustomer {
  businessName?: string;

  status?: string;

  type?: string;
}

/**
 * Shared models between all Customer types
 */
export interface UnverifiedCustomer {
  id?: string;

  _links?: unknown;

  correlationId?: string;

  created?: string;

  email?: string;

  firstName?: string;

  lastName?: string;

  status?: string;

  type?: string;
}

/**
 * Shared models between all Customer types
 */
export interface VerifiedBusinessCustomer extends UnverifiedCustomer {
  address1?: string;

  address2?: string;

  businessClassification?: string;

  businessName?: string;

  businessType?: string;

  city?: string;

  /**
   * Controller JSON Object for Customer responses
   */
  controller?: Controller;

  doingBusinessAs?: string;

  phone?: string;

  postalCode?: string;

  state?: string;

  status?: string;

  type?: string;

  website?: string;
}

/**
 * Shared models between all Customer types
 */
export interface VerifiedPersonalCustomer extends UnverifiedCustomer {
  address1?: string;

  address2?: string;

  city?: string;

  postalCode?: string;

  state?: string;

  status?: string;

  type?: string;
}

/**
 * Shared models between all Customer types
 */
export interface VerifiedSolePropCustomer extends UnverifiedCustomer {
  address1?: string;

  address2?: string;

  businessClassification?: string;

  businessName?: string;

  businessType?: string;

  city?: string;

  postalCode?: string;

  state?: string;

  status?: string;

  type?: string;
}

/**
 * Shared models between all Customer types
 */
export type CustomerRetrieveResponse =
  | UnverifiedCustomer
  | UnverifiedBusinessCustomer
  | VerifiedPersonalCustomer
  | VerifiedSolePropCustomer
  | VerifiedBusinessCustomer;

/**
 * Shared models between all Customer types
 */
export type CustomerUpdateResponse =
  | UnverifiedCustomer
  | UnverifiedBusinessCustomer
  | VerifiedPersonalCustomer
  | VerifiedSolePropCustomer
  | VerifiedBusinessCustomer;

export interface CustomerListResponse {
  _embedded?: CustomerListResponse._Embedded;

  _links?: unknown;
}

export namespace CustomerListResponse {
  export interface _Embedded {
    customers?: Array<
      | CustomersAPI.UnverifiedCustomer
      | CustomersAPI.UnverifiedBusinessCustomer
      | CustomersAPI.VerifiedPersonalCustomer
      | CustomersAPI.VerifiedSolePropCustomer
      | CustomersAPI.VerifiedBusinessCustomer
    >;
  }
}

export type CustomerCreateParams =
  | CustomerCreateParams.CreateReceiveOnlyRequestBody
  | CustomerCreateParams.CreateUnverifiedCustomerRequestBody
  | CustomerCreateParams.CreateVerifiedPersonalRequestBody
  | CustomerCreateParams.CreateVerifiedSolePropRequestBody
  | CustomerCreateParams.CreateVerifiedBusinessRequestBody;

export namespace CustomerCreateParams {
  export interface CreateReceiveOnlyRequestBody {
    email: string;

    firstName: string;

    lastName: string;

    type: string;

    businessName?: string;

    correlationId?: string;

    ipAddress?: string;

    phone?: string;
  }

  export interface CreateUnverifiedCustomerRequestBody {
    email: string;

    firstName: string;

    lastName: string;

    businessName?: string;

    correlationId?: string;

    ipAddress?: string;

    phone?: string;
  }

  export interface CreateVerifiedPersonalRequestBody {
    address1: string;

    city: string;

    dateOfBirth: string;

    email: string;

    firstName: string;

    lastName: string;

    postalCode: string;

    ssn: string;

    state: string;

    type: string;

    address2?: string;

    businessName?: string;

    correlationId?: string;

    ipAddress?: string;

    phone?: string;
  }

  export interface CreateVerifiedSolePropRequestBody {
    address1: string;

    businessClassification: string;

    businessName: string;

    businessType: string;

    city: string;

    dateOfBirth: string;

    email: string;

    firstName: string;

    lastName: string;

    postalCode: string;

    ssn: string;

    state: string;

    type: string;

    address2?: string;

    correlationId?: string;

    doingBusinessAs?: string;

    ein?: string;

    ipAddress?: string;

    phone?: string;

    website?: string;
  }

  export interface CreateVerifiedBusinessRequestBody {
    address1: string;

    businessClassification: string;

    businessName: string;

    businessType: string;

    city: string;

    /**
     * Controller object with SSN
     */
    controller:
      | CustomerCreateParams.CreateVerifiedBusinessRequestBody.ControllerWithSsn
      | CustomerCreateParams.CreateVerifiedBusinessRequestBody.ControllerWithPassport;

    dateOfBirth: string;

    ein: string;

    email: string;

    firstName: string;

    lastName: string;

    postalCode: string;

    ssn: string;

    state: string;

    type: string;

    address2?: string;

    correlationId?: string;

    doingBusinessAs?: string;

    ipAddress?: string;

    phone?: string;

    website?: string;
  }

  export namespace CreateVerifiedBusinessRequestBody {
    /**
     * Controller object with SSN
     */
    export interface ControllerWithSsn {
      address: Shared.InternationalAddress;

      dateOfBirth: string;

      firstName: string;

      lastName: string;

      ssn: string;

      title: string;
    }

    /**
     * Controller object with Passport
     */
    export interface ControllerWithPassport {
      address: Shared.InternationalAddress;

      dateOfBirth: string;

      firstName: string;

      lastName: string;

      passport: Shared.Passport;

      title: string;
    }
  }
}

export type CustomerUpdateParams =
  | CustomerUpdateParams.DeactivateCustomer
  | CustomerUpdateParams.ReactivateCustomer
  | CustomerUpdateParams.SuspendCustomer
  | CustomerUpdateParams.UpdateUnverifiedAndReceiveOnly
  | CustomerUpdateParams.UpdateVerifiedPersonal
  | CustomerUpdateParams.UpdateVerifiedBusiness
  | CustomerUpdateParams.CreateVerifiedPersonalRequestBody
  | CustomerUpdateParams.CreateVerifiedBusinessRequestBody
  | CustomerUpdateParams.CreateVerifiedSolePropRequestBody
  | CustomerUpdateParams.CreateVerifiedPersonalRequestBody
  | CustomerUpdateParams.CreateVerifiedBusinessRequestBody
  | CustomerUpdateParams.CreateVerifiedSolePropRequestBody;

export namespace CustomerUpdateParams {
  export interface DeactivateCustomer {
    status: string;
  }

  export interface ReactivateCustomer {
    status: string;
  }

  export interface SuspendCustomer {
    status: string;
  }

  export interface UpdateUnverifiedAndReceiveOnly {
    businessName?: string;

    email?: string;

    firstName?: string;

    lastName?: string;
  }

  export interface UpdateVerifiedPersonal {
    address1?: string;

    address2?: string;

    city?: string;

    email?: string;

    ipAddress?: string;

    phone?: string;

    postalCode?: string;

    state?: string;
  }

  export interface UpdateVerifiedBusiness {
    doingBusinessAs?: string;

    website?: string;
  }

  export interface CreateVerifiedPersonalRequestBody {
    address1: string;

    city: string;

    dateOfBirth: string;

    email: string;

    firstName: string;

    lastName: string;

    postalCode: string;

    ssn: string;

    state: string;

    type: string;

    address2?: string;

    businessName?: string;

    correlationId?: string;

    ipAddress?: string;

    phone?: string;
  }

  export interface CreateVerifiedBusinessRequestBody {
    address1: string;

    businessClassification: string;

    businessName: string;

    businessType: string;

    city: string;

    /**
     * Controller object with SSN
     */
    controller:
      | CustomerUpdateParams.CreateVerifiedBusinessRequestBody.ControllerWithSsn
      | CustomerUpdateParams.CreateVerifiedBusinessRequestBody.ControllerWithPassport;

    dateOfBirth: string;

    ein: string;

    email: string;

    firstName: string;

    lastName: string;

    postalCode: string;

    ssn: string;

    state: string;

    type: string;

    address2?: string;

    correlationId?: string;

    doingBusinessAs?: string;

    ipAddress?: string;

    phone?: string;

    website?: string;
  }

  export namespace CreateVerifiedBusinessRequestBody {
    /**
     * Controller object with SSN
     */
    export interface ControllerWithSsn {
      address: Shared.InternationalAddress;

      dateOfBirth: string;

      firstName: string;

      lastName: string;

      ssn: string;

      title: string;
    }

    /**
     * Controller object with Passport
     */
    export interface ControllerWithPassport {
      address: Shared.InternationalAddress;

      dateOfBirth: string;

      firstName: string;

      lastName: string;

      passport: Shared.Passport;

      title: string;
    }
  }

  export interface CreateVerifiedSolePropRequestBody {
    address1: string;

    businessClassification: string;

    businessName: string;

    businessType: string;

    city: string;

    dateOfBirth: string;

    email: string;

    firstName: string;

    lastName: string;

    postalCode: string;

    ssn: string;

    state: string;

    type: string;

    address2?: string;

    correlationId?: string;

    doingBusinessAs?: string;

    ein?: string;

    ipAddress?: string;

    phone?: string;

    website?: string;
  }

  export interface CreateVerifiedPersonalRequestBody {
    address1: string;

    city: string;

    dateOfBirth: string;

    email: string;

    firstName: string;

    lastName: string;

    postalCode: string;

    ssn: string;

    state: string;

    type: string;

    address2?: string;

    businessName?: string;

    correlationId?: string;

    ipAddress?: string;

    phone?: string;
  }

  export interface CreateVerifiedBusinessRequestBody {
    address1: string;

    businessClassification: string;

    businessName: string;

    businessType: string;

    city: string;

    /**
     * Controller object with SSN
     */
    controller:
      | CustomerUpdateParams.CreateVerifiedBusinessRequestBody.ControllerWithSsn
      | CustomerUpdateParams.CreateVerifiedBusinessRequestBody.ControllerWithPassport;

    dateOfBirth: string;

    ein: string;

    email: string;

    firstName: string;

    lastName: string;

    postalCode: string;

    ssn: string;

    state: string;

    type: string;

    address2?: string;

    correlationId?: string;

    doingBusinessAs?: string;

    ipAddress?: string;

    phone?: string;

    website?: string;
  }

  export namespace CreateVerifiedBusinessRequestBody {
    /**
     * Controller object with SSN
     */
    export interface ControllerWithSsn {
      address: Shared.InternationalAddress;

      dateOfBirth: string;

      firstName: string;

      lastName: string;

      ssn: string;

      title: string;
    }

    /**
     * Controller object with Passport
     */
    export interface ControllerWithPassport {
      address: Shared.InternationalAddress;

      dateOfBirth: string;

      firstName: string;

      lastName: string;

      passport: Shared.Passport;

      title: string;
    }
  }

  export interface CreateVerifiedSolePropRequestBody {
    address1: string;

    businessClassification: string;

    businessName: string;

    businessType: string;

    city: string;

    dateOfBirth: string;

    email: string;

    firstName: string;

    lastName: string;

    postalCode: string;

    ssn: string;

    state: string;

    type: string;

    address2?: string;

    correlationId?: string;

    doingBusinessAs?: string;

    ein?: string;

    ipAddress?: string;

    phone?: string;

    website?: string;
  }
}

export interface CustomerListParams extends OffsetStringPaginationParams {
  /**
   * Searches on certain fields
   */
  search?: string;

  /**
   * Filter by customer status
   */
  status?: string;
}

Customers.CustomerListResponsesOffsetStringPagination = CustomerListResponsesOffsetStringPagination;
Customers.BeneficialOwners = BeneficialOwners;
Customers.BeneficialOwnership = BeneficialOwnership;
Customers.Documents = Documents;
Customers.Kba = Kba;
Customers.FundingSources = FundingSources;
Customers.FundingSourcesToken = FundingSourcesToken;
Customers.IavToken = IavToken;
Customers.Transfers = Transfers;
Customers.TransferListResponsesOffsetStringPagination = TransferListResponsesOffsetStringPagination;
Customers.MassPayments = MassPayments;
Customers.MassPaymentListResponsesOffsetStringPagination = MassPaymentListResponsesOffsetStringPagination;
Customers.Labels = Labels;
Customers.LabelListResponsesOffsetStringPagination = LabelListResponsesOffsetStringPagination;
Customers.Exchanges = Exchanges;

export declare namespace Customers {
  export {
    type Controller as Controller,
    type UnverifiedBusinessCustomer as UnverifiedBusinessCustomer,
    type UnverifiedCustomer as UnverifiedCustomer,
    type VerifiedBusinessCustomer as VerifiedBusinessCustomer,
    type VerifiedPersonalCustomer as VerifiedPersonalCustomer,
    type VerifiedSolePropCustomer as VerifiedSolePropCustomer,
    type CustomerRetrieveResponse as CustomerRetrieveResponse,
    type CustomerUpdateResponse as CustomerUpdateResponse,
    type CustomerListResponse as CustomerListResponse,
    CustomerListResponsesOffsetStringPagination as CustomerListResponsesOffsetStringPagination,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };

  export {
    BeneficialOwners as BeneficialOwners,
    type BeneficialOwnerListResponse as BeneficialOwnerListResponse,
    type BeneficialOwnerCreateParams as BeneficialOwnerCreateParams,
  };

  export {
    BeneficialOwnership as BeneficialOwnership,
    type BeneficialOwnershipRetrieveResponse as BeneficialOwnershipRetrieveResponse,
    type BeneficialOwnershipCertifyResponse as BeneficialOwnershipCertifyResponse,
    type BeneficialOwnershipCertifyParams as BeneficialOwnershipCertifyParams,
  };

  export {
    Documents as Documents,
    type DocumentListResponse as DocumentListResponse,
    type DocumentCreateParams as DocumentCreateParams,
  };

  export { Kba as Kba };

  export {
    FundingSources as FundingSources,
    type FundingSourceListResponse as FundingSourceListResponse,
    type FundingSourceCreateParams as FundingSourceCreateParams,
  };

  export {
    FundingSourcesToken as FundingSourcesToken,
    type FundingSourcesTokenCreateResponse as FundingSourcesTokenCreateResponse,
  };

  export { IavToken as IavToken, type IavTokenCreateResponse as IavTokenCreateResponse };

  export {
    Transfers as Transfers,
    type TransferListResponse as TransferListResponse,
    TransferListResponsesOffsetStringPagination as TransferListResponsesOffsetStringPagination,
    type TransferListParams as TransferListParams,
  };

  export {
    MassPayments as MassPayments,
    type MassPaymentListResponse as MassPaymentListResponse,
    MassPaymentListResponsesOffsetStringPagination as MassPaymentListResponsesOffsetStringPagination,
    type MassPaymentListParams as MassPaymentListParams,
  };

  export {
    Labels as Labels,
    type LabelListResponse as LabelListResponse,
    LabelListResponsesOffsetStringPagination as LabelListResponsesOffsetStringPagination,
    type LabelCreateParams as LabelCreateParams,
    type LabelListParams as LabelListParams,
  };

  export {
    Exchanges as Exchanges,
    type ExchangeListResponse as ExchangeListResponse,
    type ExchangeCreateParams as ExchangeCreateParams,
  };
}
