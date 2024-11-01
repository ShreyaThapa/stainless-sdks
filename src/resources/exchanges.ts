// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Exchanges extends APIResource {
  /**
   * Create exchange for an account
   */
  create(body?: ExchangeCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  create(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  create(
    body: ExchangeCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/exchanges', { body, ...options });
  }

  /**
   * Retrieve exchange resource
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ExchangeRetrieveResponse> {
    return this._client.get(`/exchanges/${id}`, options);
  }

  /**
   * List exchanges for an account
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ExchangeListResponse> {
    return this._client.get('/exchanges', options);
  }
}

export type ExchangeCreateResponse = unknown;

export interface ExchangeRetrieveResponse {
  id?: string;

  _links?: unknown;

  created?: string;

  status?: string;
}

export interface ExchangeListResponse {
  _embedded?: ExchangeListResponse._Embedded;

  _links?: unknown;

  total?: number;
}

export namespace ExchangeListResponse {
  export interface _Embedded {
    exchanges?: Array<_Embedded.Exchange>;
  }

  export namespace _Embedded {
    export interface Exchange {
      id?: string;

      _links?: unknown;

      created?: string;

      status?: string;
    }
  }
}

export type ExchangeCreateParams =
  | ExchangeCreateParams.FinicityCreateExchangeRequestBody
  | ExchangeCreateParams.MxCreateExchangeRequestBody;

export namespace ExchangeCreateParams {
  export interface FinicityCreateExchangeRequestBody {
    _links?: ExchangeCreateParams.FinicityCreateExchangeRequestBody._Links;

    finicity?: ExchangeCreateParams.FinicityCreateExchangeRequestBody.Finicity;
  }

  export namespace FinicityCreateExchangeRequestBody {
    export interface _Links {
      'exchange-partner'?: _Links.ExchangePartner;
    }

    export namespace _Links {
      export interface ExchangePartner {
        href?: string;
      }
    }

    export interface Finicity {
      customerId?: string;

      partnerId?: number;

      products?: Array<Finicity.Product>;

      profile?: number;

      receiptId?: string;

      receiptVersion?: string;

      timestamp?: string;

      version?: string;
    }

    export namespace Finicity {
      export interface Product {
        accessPeriod?: Product.AccessPeriod;

        accountId?: string;

        product?: string;
      }

      export namespace Product {
        export interface AccessPeriod {
          endTime?: string;

          startTime?: string;

          type?: string;
        }
      }
    }
  }

  export interface MxCreateExchangeRequestBody {
    token?: string;

    _links?: ExchangeCreateParams.MxCreateExchangeRequestBody._Links;
  }

  export namespace MxCreateExchangeRequestBody {
    export interface _Links {
      'exchange-partner'?: _Links.ExchangePartner;
    }

    export namespace _Links {
      export interface ExchangePartner {
        href?: string;
      }
    }
  }
}

export declare namespace Exchanges {
  export {
    type ExchangeCreateResponse as ExchangeCreateResponse,
    type ExchangeRetrieveResponse as ExchangeRetrieveResponse,
    type ExchangeListResponse as ExchangeListResponse,
    type ExchangeCreateParams as ExchangeCreateParams,
  };
}
