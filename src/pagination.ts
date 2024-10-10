// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface OffsetStringPaginationResponse<Item> {
  _embedded: OffsetStringPaginationResponse._Embedded<Item>;
}

export namespace OffsetStringPaginationResponse {
  export interface _Embedded<Item> {
    tiems?: Array<Item>;
  }
}

export interface OffsetStringPaginationParams {
  offset?: string;

  /**
   * The maximum number of elements to fetch.
   */
  limit?: string;
}

export class OffsetStringPagination<Item>
  extends AbstractPage<Item>
  implements OffsetStringPaginationResponse<Item>
{
  _embedded: OffsetStringPaginationResponse._Embedded<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: OffsetStringPaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this._embedded = body._embedded || {};
  }

  getPaginatedItems(): Item[] {
    return this._embedded?.tiems ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<OffsetStringPaginationParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const offset = (this.options.query as OffsetStringPaginationParams).offset ?? 0;
    if (!offset) {
      return null;
    }

    const length = this.getPaginatedItems().length;
    const currentCount = offset + length;

    return { params: { offset: currentCount } };
  }
}

export interface OffsetIntegerPaginationResponse<Item> {
  _embedded: OffsetIntegerPaginationResponse._Embedded<Item>;
}

export namespace OffsetIntegerPaginationResponse {
  export interface _Embedded<Item> {
    tiems?: Array<Item>;
  }
}

export interface OffsetIntegerPaginationParams {
  offset?: number;

  /**
   * The maximum number of elements to fetch.
   */
  limit?: number;
}

export class OffsetIntegerPagination<Item>
  extends AbstractPage<Item>
  implements OffsetIntegerPaginationResponse<Item>
{
  _embedded: OffsetIntegerPaginationResponse._Embedded<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: OffsetIntegerPaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this._embedded = body._embedded || {};
  }

  getPaginatedItems(): Item[] {
    return this._embedded?.tiems ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<OffsetIntegerPaginationParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const offset = (this.options.query as OffsetIntegerPaginationParams).offset ?? 0;
    if (!offset) {
      return null;
    }

    const length = this.getPaginatedItems().length;
    const currentCount = offset + length;

    return { params: { offset: currentCount } };
  }
}
