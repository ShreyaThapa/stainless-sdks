// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as BusinessClassificationsAPI from './business-classifications';
import * as Shared from './shared';

export class BusinessClassifications extends APIResource {
  /**
   * Retrieve a business classification
   */
  retrieve(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BusinessClassificationRetrieveResponse> {
    return this._client.get(`/business-classifications/${id}`, options);
  }

  /**
   * Retrieve an \_embedded list of business classifications that contains an
   * \_embedded list of industry classifications.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<BusinessClassificationListResponse> {
    return this._client.get('/business-classifications', options);
  }
}

export interface BusinessClassificationRetrieveResponse {
  id?: string;

  _embedded?: BusinessClassificationRetrieveResponse._Embedded;

  _links?: BusinessClassificationRetrieveResponse._Links;

  name?: string;
}

export namespace BusinessClassificationRetrieveResponse {
  export interface _Embedded {
    'industry-classifications'?: Array<_Embedded.IndustryClassification>;
  }

  export namespace _Embedded {
    export interface IndustryClassification {
      id?: string;

      name?: string;
    }
  }

  export interface _Links {
    self?: Shared.HalLink;
  }
}

export interface BusinessClassificationListResponse {
  _embedded?: BusinessClassificationListResponse._Embedded;

  _links?: unknown;
}

export namespace BusinessClassificationListResponse {
  export interface _Embedded {
    'business-classifications'?: Array<_Embedded.BusinessClassification>;
  }

  export namespace _Embedded {
    export interface BusinessClassification {
      _embedded?: BusinessClassification._Embedded;

      _links?: Record<string, Shared.HalLink>;
    }

    export namespace BusinessClassification {
      export interface _Embedded {
        'mass-payments'?: Array<_Embedded.MassPayment>;
      }

      export namespace _Embedded {
        export interface MassPayment {
          id?: string;

          _embedded?: MassPayment._Embedded;

          _links?: MassPayment._Links;

          name?: string;
        }

        export namespace MassPayment {
          export interface _Embedded {
            'industry-classifications'?: Array<_Embedded.IndustryClassification>;
          }

          export namespace _Embedded {
            export interface IndustryClassification {
              id?: string;

              name?: string;
            }
          }

          export interface _Links {
            self?: Shared.HalLink;
          }
        }
      }
    }
  }
}

export namespace BusinessClassifications {
  export type BusinessClassificationRetrieveResponse =
    BusinessClassificationsAPI.BusinessClassificationRetrieveResponse;
  export type BusinessClassificationListResponse =
    BusinessClassificationsAPI.BusinessClassificationListResponse;
}
