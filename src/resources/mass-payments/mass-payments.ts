// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as MassPaymentsAPI from './mass-payments';
import * as Shared from '../shared';
import * as ItemsAPI from './items';

export class MassPayments extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Initiate a mass payment
   */
  create(body: MassPaymentCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/mass-payments', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieve a mass payment
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<MassPaymentRetrieveResponse> {
    return this._client.get(`/mass-payments/${id}`, options);
  }

  /**
   * Update a mass payment to process or cancel it
   */
  update(
    id: string,
    body: MassPaymentUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MassPaymentUpdateResponse> {
    return this._client.post(`/mass-payments/${id}`, { body, ...options });
  }
}

export interface MassPaymentRetrieveResponse {
  id?: string;

  _links?: Record<string, Shared.HalLink>;

  correlationId?: string;

  created?: string;

  metaData?: unknown;

  status?: string;

  total?: Shared.TransferAmount;

  totalFees?: Shared.TransferAmount;
}

export interface MassPaymentUpdateResponse {
  id?: string;

  _links?: Record<string, Shared.HalLink>;

  correlationId?: string;

  created?: string;

  metaData?: unknown;

  status?: string;

  total?: Shared.TransferAmount;

  totalFees?: Shared.TransferAmount;
}

export interface MassPaymentCreateParams {
  _links: MassPaymentCreateParams._Links;

  items: Array<MassPaymentCreateParams.Item>;

  achDetails?: MassPaymentCreateParams.ACHDetails;

  clearing?: MassPaymentCreateParams.Clearing;

  correlationId?: string;

  metadata?: unknown;

  status?: string;
}

export namespace MassPaymentCreateParams {
  export interface _Links {
    source?: _Links.Source;
  }

  export namespace _Links {
    export interface Source {
      href?: string;
    }
  }

  export interface Item {
    _links?: Item._Links;

    achDetails?: Item.ACHDetails;

    amount?: Shared.TransferAmount;

    clearing?: Item.Clearing;

    correlationId?: string;

    metadata?: unknown;

    processingChannel?: Item.ProcessingChannel;
  }

  export namespace Item {
    export interface _Links {
      destination?: _Links.Destination;
    }

    export namespace _Links {
      export interface Destination {
        href?: string;
      }
    }

    export interface ACHDetails {
      destination?: ACHDetails.Destination;
    }

    export namespace ACHDetails {
      export interface Destination {
        addenda?: Destination.Addenda;
      }

      export namespace Destination {
        export interface Addenda {
          values?: Array<string>;
        }
      }
    }

    export interface Clearing {
      destination?: string;
    }

    export interface ProcessingChannel {
      destination?: string;
    }
  }

  export interface ACHDetails {
    source?: ACHDetails.Source;
  }

  export namespace ACHDetails {
    export interface Source {
      addenda?: Source.Addenda;
    }

    export namespace Source {
      export interface Addenda {
        values?: Array<string>;
      }
    }
  }

  export interface Clearing {
    source?: string;
  }
}

export interface MassPaymentUpdateParams {
  status: string;
}

export namespace MassPayments {
  export import MassPaymentRetrieveResponse = MassPaymentsAPI.MassPaymentRetrieveResponse;
  export import MassPaymentUpdateResponse = MassPaymentsAPI.MassPaymentUpdateResponse;
  export import MassPaymentCreateParams = MassPaymentsAPI.MassPaymentCreateParams;
  export import MassPaymentUpdateParams = MassPaymentsAPI.MassPaymentUpdateParams;
  export import Items = ItemsAPI.Items;
  export import ItemRetrieveResponse = ItemsAPI.ItemRetrieveResponse;
  export import ItemListResponse = ItemsAPI.ItemListResponse;
  export import ItemListParams = ItemsAPI.ItemListParams;
}
