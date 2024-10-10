// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as CustomersAPI from './customers';
import * as Shared from '../shared';
import * as BeneficialOwnersAPI from './beneficial-owners';
import * as BeneficialOwnershipAPI from './beneficial-ownership';
import * as DocumentsAPI from './documents';
import * as ExchangesAPI from './exchanges';
import * as FundingSourcesAPI from './funding-sources';
import * as FundingSourcesTokenAPI from './funding-sources-token';
import * as IavTokenAPI from './iav-token';
import * as KbaAPI from './kba';
import * as LabelsAPI from './labels';
import * as MassPaymentsAPI from './mass-payments';
import * as TransfersAPI from './transfers';
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

export namespace Customers {
  export import Controller = CustomersAPI.Controller;
  export import UnverifiedBusinessCustomer = CustomersAPI.UnverifiedBusinessCustomer;
  export import UnverifiedCustomer = CustomersAPI.UnverifiedCustomer;
  export import VerifiedBusinessCustomer = CustomersAPI.VerifiedBusinessCustomer;
  export import VerifiedPersonalCustomer = CustomersAPI.VerifiedPersonalCustomer;
  export import VerifiedSolePropCustomer = CustomersAPI.VerifiedSolePropCustomer;
  export import CustomerRetrieveResponse = CustomersAPI.CustomerRetrieveResponse;
  export import CustomerUpdateResponse = CustomersAPI.CustomerUpdateResponse;
  export import CustomerListResponse = CustomersAPI.CustomerListResponse;
  export import CustomerListResponsesOffsetStringPagination = CustomersAPI.CustomerListResponsesOffsetStringPagination;
  export import CustomerCreateParams = CustomersAPI.CustomerCreateParams;
  export import CustomerUpdateParams = CustomersAPI.CustomerUpdateParams;
  export import CustomerListParams = CustomersAPI.CustomerListParams;
  export import BeneficialOwners = BeneficialOwnersAPI.BeneficialOwners;
  export import BeneficialOwnerListResponse = BeneficialOwnersAPI.BeneficialOwnerListResponse;
  export import BeneficialOwnerCreateParams = BeneficialOwnersAPI.BeneficialOwnerCreateParams;
  export import BeneficialOwnership = BeneficialOwnershipAPI.BeneficialOwnership;
  export import BeneficialOwnershipRetrieveResponse = BeneficialOwnershipAPI.BeneficialOwnershipRetrieveResponse;
  export import BeneficialOwnershipCertifyResponse = BeneficialOwnershipAPI.BeneficialOwnershipCertifyResponse;
  export import BeneficialOwnershipCertifyParams = BeneficialOwnershipAPI.BeneficialOwnershipCertifyParams;
  export import Documents = DocumentsAPI.Documents;
  export import DocumentListResponse = DocumentsAPI.DocumentListResponse;
  export import DocumentCreateParams = DocumentsAPI.DocumentCreateParams;
  export import Kba = KbaAPI.Kba;
  export import FundingSources = FundingSourcesAPI.FundingSources;
  export import FundingSourceListResponse = FundingSourcesAPI.FundingSourceListResponse;
  export import FundingSourceCreateParams = FundingSourcesAPI.FundingSourceCreateParams;
  export import FundingSourcesToken = FundingSourcesTokenAPI.FundingSourcesToken;
  export import FundingSourcesTokenCreateResponse = FundingSourcesTokenAPI.FundingSourcesTokenCreateResponse;
  export import IavToken = IavTokenAPI.IavToken;
  export import IavTokenCreateResponse = IavTokenAPI.IavTokenCreateResponse;
  export import Transfers = TransfersAPI.Transfers;
  export import TransferListResponse = TransfersAPI.TransferListResponse;
  export import TransferListResponsesOffsetStringPagination = TransfersAPI.TransferListResponsesOffsetStringPagination;
  export import TransferListParams = TransfersAPI.TransferListParams;
  export import MassPayments = MassPaymentsAPI.MassPayments;
  export import MassPaymentListResponse = MassPaymentsAPI.MassPaymentListResponse;
  export import MassPaymentListResponsesOffsetStringPagination = MassPaymentsAPI.MassPaymentListResponsesOffsetStringPagination;
  export import MassPaymentListParams = MassPaymentsAPI.MassPaymentListParams;
  export import Labels = LabelsAPI.Labels;
  export import LabelListResponse = LabelsAPI.LabelListResponse;
  export import LabelListResponsesOffsetStringPagination = LabelsAPI.LabelListResponsesOffsetStringPagination;
  export import LabelCreateParams = LabelsAPI.LabelCreateParams;
  export import LabelListParams = LabelsAPI.LabelListParams;
  export import Exchanges = ExchangesAPI.Exchanges;
  export import ExchangeListResponse = ExchangesAPI.ExchangeListResponse;
  export import ExchangeCreateParams = ExchangesAPI.ExchangeCreateParams;
}
