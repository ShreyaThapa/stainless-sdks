// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as MassPaymentItemsAPI from './mass-payment-items';

export class MassPaymentItems extends APIResource {
  /**
   * Retrieve mass payment item
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<MassPaymentItemRetrieveResponse> {
    return this._client.get(`/mass-payment-items/${id}`, options);
  }
}

export interface MassPaymentItemRetrieveResponse {
  id?: string;

  _links?: MassPaymentItemRetrieveResponse._Links;

  amount?: MassPaymentItemRetrieveResponse.Amount;

  metadata?: MassPaymentItemRetrieveResponse.Metadata;

  processingChannel?: MassPaymentItemRetrieveResponse.ProcessingChannel;

  status?: string;
}

export namespace MassPaymentItemRetrieveResponse {
  export interface _Links {
    destination?: _Links.Destination;

    'mass-payment'?: _Links.MassPayment;

    self?: _Links.Self;

    transfer?: _Links.Transfer;
  }

  export namespace _Links {
    export interface Destination {
      href?: string;
    }

    export interface MassPayment {
      href?: string;
    }

    export interface Self {
      href?: string;
    }

    export interface Transfer {
      href?: string;
    }
  }

  export interface Amount {
    currency?: string;

    value?: string;
  }

  export interface Metadata {
    item1?: string;
  }

  export interface ProcessingChannel {
    destination?: string;
  }
}

export namespace MassPaymentItems {
  export import MassPaymentItemRetrieveResponse = MassPaymentItemsAPI.MassPaymentItemRetrieveResponse;
}
