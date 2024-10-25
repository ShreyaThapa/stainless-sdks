// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ExchangePartnersAPI from './exchange-partners';
import * as Shared from './shared';

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
  list(options?: Core.RequestOptions): Core.APIPromise<Shared.ExchangePartners> {
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

export namespace ExchangePartners {
  export import ExchangePartnerRetrieveResponse = ExchangePartnersAPI.ExchangePartnerRetrieveResponse;
}
