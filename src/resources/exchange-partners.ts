// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ExchangePartnersAPI from './exchange-partners';

export class ExchangePartners extends APIResource {
  /**
   * Retrieve exchange partner
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ExchangePartnerRetrieveResponse> {
    return this._client.get(`/exchange-partners/${id}`, options);
  }

  /**
   * List exchange partners
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ExchangePartnerListResponse> {
    return this._client.get('/exchange-partners', options);
  }
}

export interface ExchangePartnerRetrieveResponse {
  id?: string;

  _links?: unknown;

  created?: string;

  name?: string;

  status?: string;
}

export interface ExchangePartnerListResponse {
  _embedded?: ExchangePartnerListResponse._Embedded;

  _links?: unknown;

  total?: number;
}

export namespace ExchangePartnerListResponse {
  export interface _Embedded {
    'exchange-partners'?: Array<_Embedded.ExchangePartner>;
  }

  export namespace _Embedded {
    export interface ExchangePartner {
      _embedded?: ExchangePartner._Embedded;

      _links?: unknown;

      total?: number;
    }

    export namespace ExchangePartner {
      export interface _Embedded {
        'exchange-partners'?: Array<unknown>;
      }
    }
  }
}

export namespace ExchangePartners {
  export import ExchangePartnerRetrieveResponse = ExchangePartnersAPI.ExchangePartnerRetrieveResponse;
  export import ExchangePartnerListResponse = ExchangePartnersAPI.ExchangePartnerListResponse;
}
