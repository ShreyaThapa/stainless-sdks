// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as CustomersAPI from './customers';
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
  list(query?: CustomerListParams, options?: Core.RequestOptions): Core.APIPromise<CustomerListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CustomerListResponse>;
  list(
    query: CustomerListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/customers', { query, ...options });
  }
}

/**
 * Shared models between all Customer types
 */
export type CustomerRetrieveResponse =
  | CustomerRetrieveResponse.UnverifiedCustomer
  | CustomerRetrieveResponse.UnverifiedBusinessCustomer
  | CustomerRetrieveResponse.VerifiedPersonalCustomer
  | CustomerRetrieveResponse.VerifiedSolePropCustomer
  | CustomerRetrieveResponse.VerifiedBusinessCustomer;

export namespace CustomerRetrieveResponse {
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

  export interface UnverifiedBusinessCustomer {
    id?: string;

    _links?: unknown;

    businessName?: string;

    correlationId?: string;

    created?: string;

    email?: string;

    firstName?: string;

    lastName?: string;

    status?: string;

    type?: string;
  }

  export interface VerifiedPersonalCustomer {
    id?: string;

    _links?: unknown;

    address1?: string;

    address2?: string;

    city?: string;

    correlationId?: string;

    created?: string;

    email?: string;

    firstName?: string;

    lastName?: string;

    postalCode?: string;

    state?: string;

    status?: string;

    type?: string;
  }

  export interface VerifiedSolePropCustomer {
    id?: string;

    _links?: unknown;

    address1?: string;

    address2?: string;

    businessClassification?: string;

    businessName?: string;

    businessType?: string;

    city?: string;

    correlationId?: string;

    created?: string;

    email?: string;

    firstName?: string;

    lastName?: string;

    postalCode?: string;

    state?: string;

    status?: string;

    type?: string;
  }

  export interface VerifiedBusinessCustomer {
    id?: string;

    _links?: unknown;

    address1?: string;

    address2?: string;

    businessClassification?: string;

    businessName?: string;

    businessType?: string;

    city?: string;

    /**
     * Controller JSON Object for Customer responses
     */
    controller?: VerifiedBusinessCustomer.Controller;

    correlationId?: string;

    created?: string;

    doingBusinessAs?: string;

    email?: string;

    firstName?: string;

    lastName?: string;

    phone?: string;

    postalCode?: string;

    state?: string;

    status?: string;

    type?: string;

    website?: string;
  }

  export namespace VerifiedBusinessCustomer {
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
  }
}

/**
 * Shared models between all Customer types
 */
export type CustomerUpdateResponse =
  | CustomerUpdateResponse.UnverifiedCustomer
  | CustomerUpdateResponse.UnverifiedBusinessCustomer
  | CustomerUpdateResponse.VerifiedPersonalCustomer
  | CustomerUpdateResponse.VerifiedSolePropCustomer
  | CustomerUpdateResponse.VerifiedBusinessCustomer;

export namespace CustomerUpdateResponse {
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

  export interface UnverifiedBusinessCustomer {
    id?: string;

    _links?: unknown;

    businessName?: string;

    correlationId?: string;

    created?: string;

    email?: string;

    firstName?: string;

    lastName?: string;

    status?: string;

    type?: string;
  }

  export interface VerifiedPersonalCustomer {
    id?: string;

    _links?: unknown;

    address1?: string;

    address2?: string;

    city?: string;

    correlationId?: string;

    created?: string;

    email?: string;

    firstName?: string;

    lastName?: string;

    postalCode?: string;

    state?: string;

    status?: string;

    type?: string;
  }

  export interface VerifiedSolePropCustomer {
    id?: string;

    _links?: unknown;

    address1?: string;

    address2?: string;

    businessClassification?: string;

    businessName?: string;

    businessType?: string;

    city?: string;

    correlationId?: string;

    created?: string;

    email?: string;

    firstName?: string;

    lastName?: string;

    postalCode?: string;

    state?: string;

    status?: string;

    type?: string;
  }

  export interface VerifiedBusinessCustomer {
    id?: string;

    _links?: unknown;

    address1?: string;

    address2?: string;

    businessClassification?: string;

    businessName?: string;

    businessType?: string;

    city?: string;

    /**
     * Controller JSON Object for Customer responses
     */
    controller?: VerifiedBusinessCustomer.Controller;

    correlationId?: string;

    created?: string;

    doingBusinessAs?: string;

    email?: string;

    firstName?: string;

    lastName?: string;

    phone?: string;

    postalCode?: string;

    state?: string;

    status?: string;

    type?: string;

    website?: string;
  }

  export namespace VerifiedBusinessCustomer {
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
  }
}

export interface CustomerListResponse {
  _embedded?: CustomerListResponse._Embedded;

  _links?: unknown;
}

export namespace CustomerListResponse {
  export interface _Embedded {
    customers?: Array<
      | _Embedded.UnverifiedCustomer
      | _Embedded.UnverifiedBusinessCustomer
      | _Embedded.VerifiedPersonalCustomer
      | _Embedded.VerifiedSolePropCustomer
      | _Embedded.VerifiedBusinessCustomer
    >;
  }

  export namespace _Embedded {
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

    export interface UnverifiedBusinessCustomer {
      id?: string;

      _links?: unknown;

      businessName?: string;

      correlationId?: string;

      created?: string;

      email?: string;

      firstName?: string;

      lastName?: string;

      status?: string;

      type?: string;
    }

    export interface VerifiedPersonalCustomer {
      id?: string;

      _links?: unknown;

      address1?: string;

      address2?: string;

      city?: string;

      correlationId?: string;

      created?: string;

      email?: string;

      firstName?: string;

      lastName?: string;

      postalCode?: string;

      state?: string;

      status?: string;

      type?: string;
    }

    export interface VerifiedSolePropCustomer {
      id?: string;

      _links?: unknown;

      address1?: string;

      address2?: string;

      businessClassification?: string;

      businessName?: string;

      businessType?: string;

      city?: string;

      correlationId?: string;

      created?: string;

      email?: string;

      firstName?: string;

      lastName?: string;

      postalCode?: string;

      state?: string;

      status?: string;

      type?: string;
    }

    export interface VerifiedBusinessCustomer {
      id?: string;

      _links?: unknown;

      address1?: string;

      address2?: string;

      businessClassification?: string;

      businessName?: string;

      businessType?: string;

      city?: string;

      /**
       * Controller JSON Object for Customer responses
       */
      controller?: VerifiedBusinessCustomer.Controller;

      correlationId?: string;

      created?: string;

      doingBusinessAs?: string;

      email?: string;

      firstName?: string;

      lastName?: string;

      phone?: string;

      postalCode?: string;

      state?: string;

      status?: string;

      type?: string;

      website?: string;
    }

    export namespace VerifiedBusinessCustomer {
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
    }
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
      address: ControllerWithSsn.Address;

      dateOfBirth: string;

      firstName: string;

      lastName: string;

      ssn: string;

      title: string;
    }

    export namespace ControllerWithSsn {
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
     * Controller object with Passport
     */
    export interface ControllerWithPassport {
      address: ControllerWithPassport.Address;

      dateOfBirth: string;

      firstName: string;

      lastName: string;

      passport: ControllerWithPassport.Passport;

      title: string;
    }

    export namespace ControllerWithPassport {
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
      address: ControllerWithSsn.Address;

      dateOfBirth: string;

      firstName: string;

      lastName: string;

      ssn: string;

      title: string;
    }

    export namespace ControllerWithSsn {
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
     * Controller object with Passport
     */
    export interface ControllerWithPassport {
      address: ControllerWithPassport.Address;

      dateOfBirth: string;

      firstName: string;

      lastName: string;

      passport: ControllerWithPassport.Passport;

      title: string;
    }

    export namespace ControllerWithPassport {
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
      address: ControllerWithSsn.Address;

      dateOfBirth: string;

      firstName: string;

      lastName: string;

      ssn: string;

      title: string;
    }

    export namespace ControllerWithSsn {
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
     * Controller object with Passport
     */
    export interface ControllerWithPassport {
      address: ControllerWithPassport.Address;

      dateOfBirth: string;

      firstName: string;

      lastName: string;

      passport: ControllerWithPassport.Passport;

      title: string;
    }

    export namespace ControllerWithPassport {
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

export interface CustomerListParams {
  /**
   * How many results to return
   */
  limit?: string;

  /**
   * How many results to skip
   */
  offset?: string;

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
  export import CustomerRetrieveResponse = CustomersAPI.CustomerRetrieveResponse;
  export import CustomerUpdateResponse = CustomersAPI.CustomerUpdateResponse;
  export import CustomerListResponse = CustomersAPI.CustomerListResponse;
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
  export import TransferListParams = TransfersAPI.TransferListParams;
  export import MassPayments = MassPaymentsAPI.MassPayments;
  export import MassPaymentListResponse = MassPaymentsAPI.MassPaymentListResponse;
  export import MassPaymentListParams = MassPaymentsAPI.MassPaymentListParams;
  export import Labels = LabelsAPI.Labels;
  export import LabelListResponse = LabelsAPI.LabelListResponse;
  export import LabelCreateParams = LabelsAPI.LabelCreateParams;
  export import LabelListParams = LabelsAPI.LabelListParams;
  export import Exchanges = ExchangesAPI.Exchanges;
  export import ExchangeListResponse = ExchangesAPI.ExchangeListResponse;
  export import ExchangeCreateParams = ExchangesAPI.ExchangeCreateParams;
}
