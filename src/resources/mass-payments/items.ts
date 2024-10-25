// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ItemsAPI from './items';
import { OffsetStringPagination, type OffsetStringPaginationParams } from '../../pagination';

export class Items extends APIResource {
  /**
   * Retrieve mass payment item
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ItemRetrieveResponse> {
    return this._client.get(`/mass-payment-items/${id}`, options);
  }

  /**
   * List items for a mass payment
   */
  list(
    id: string,
    query?: ItemListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ItemListResponsesOffsetStringPagination, ItemListResponse>;
  list(
    id: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ItemListResponsesOffsetStringPagination, ItemListResponse>;
  list(
    id: string,
    query: ItemListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ItemListResponsesOffsetStringPagination, ItemListResponse> {
    if (isRequestOptions(query)) {
      return this.list(id, {}, query);
    }
    return this._client.getAPIList(`/mass-payments/${id}/items`, ItemListResponsesOffsetStringPagination, {
      query,
      ...options,
    });
  }
}

export class ItemListResponsesOffsetStringPagination extends OffsetStringPagination<ItemListResponse> {}

export interface ItemRetrieveResponse {
  id?: string;

  _links?: ItemRetrieveResponse._Links;

  amount?: ItemRetrieveResponse.Amount;

  metadata?: ItemRetrieveResponse.Metadata;

  processingChannel?: ItemRetrieveResponse.ProcessingChannel;

  status?: string;
}

export namespace ItemRetrieveResponse {
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

export interface ItemListParams extends OffsetStringPaginationParams {
  /**
   * Filter by item status
   */
  status?: string;
}

export namespace Items {
  export type ItemRetrieveResponse = ItemsAPI.ItemRetrieveResponse;
  export type ItemListResponse = ItemsAPI.ItemListResponse;
  export import ItemListResponsesOffsetStringPagination = ItemsAPI.ItemListResponsesOffsetStringPagination;
  export type ItemListParams = ItemsAPI.ItemListParams;
}
