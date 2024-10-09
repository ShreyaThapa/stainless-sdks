// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ItemsAPI from './items';

export class Items extends APIResource {
  /**
   * List items for a mass payment
   */
  list(id: string, query?: ItemListParams, options?: Core.RequestOptions): Core.APIPromise<ItemListResponse>;
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<ItemListResponse>;
  list(
    id: string,
    query: ItemListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemListResponse> {
    if (isRequestOptions(query)) {
      return this.list(id, {}, query);
    }
    return this._client.get(`/mass-payments/${id}/items`, { query, ...options });
  }
}

export interface ItemListResponse {
  _embedded?: ItemListResponse._Embedded;

  _links?: ItemListResponse._Links;

  total?: number;
}

export namespace ItemListResponse {
  export interface _Embedded {
    items?: Array<_Embedded.Item>;
  }

  export namespace _Embedded {
    export interface Item {
      id?: string;

      _links?: Item._Links;

      amount?: Item.Amount;

      metadata?: Item.Metadata;

      processingChannel?: Item.ProcessingChannel;

      status?: string;
    }

    export namespace Item {
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
  }

  export interface _Links {
    first?: _Links.First;

    last?: _Links.Last;

    self?: _Links.Self;
  }

  export namespace _Links {
    export interface First {
      href?: string;
    }

    export interface Last {
      href?: string;
    }

    export interface Self {
      href?: string;
    }
  }
}

export interface ItemListParams {
  /**
   * How many results to return
   */
  limit?: string;

  /**
   * How many results to skip
   */
  offset?: string;

  /**
   * Filter by item status
   */
  status?: string;
}

export namespace Items {
  export import ItemListResponse = ItemsAPI.ItemListResponse;
  export import ItemListParams = ItemsAPI.ItemListParams;
}
