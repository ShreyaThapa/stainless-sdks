// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as EventsAPI from './events';
import * as Shared from './shared';
import { OffsetIntegerPagination, type OffsetIntegerPaginationParams } from '../pagination';

export class Events extends APIResource {
  /**
   * Retrieve event
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<EventRetrieveResponse> {
    return this._client.get(`/events/${id}`, options);
  }

  /**
   * List events
   */
  list(
    query?: EventListParams | null | undefined,
    options?: Core.RequestOptions,
  ): Core.PagePromise<EventListResponsesOffsetIntegerPagination, EventListResponse> {
    return this._client.getAPIList('/events', EventListResponsesOffsetIntegerPagination, options);
  }
}

export class EventListResponsesOffsetIntegerPagination extends OffsetIntegerPagination<EventListResponse> {}

export interface EventRetrieveResponse {
  id?: string;

  _links?: Record<string, Shared.HalLink>;

  created?: string;

  resourceId?: string;

  topic?: string;
}

export interface EventListResponse {
  _embedded?: EventListResponse._Embedded;

  _links?: unknown;

  additionalProperties?: Shared.HalLink;

  total?: number;
}

export namespace EventListResponse {
  export interface _Embedded {
    events?: Array<_Embedded.Event>;
  }

  export namespace _Embedded {
    export interface Event {
      id?: string;

      _links?: Record<string, Shared.HalLink>;

      created?: string;

      resourceId?: string;

      topic?: string;
    }
  }
}

export interface EventListParams extends OffsetIntegerPaginationParams {}

export namespace Events {
  export type EventRetrieveResponse = EventsAPI.EventRetrieveResponse;
  export type EventListResponse = EventsAPI.EventListResponse;
  export import EventListResponsesOffsetIntegerPagination = EventsAPI.EventListResponsesOffsetIntegerPagination;
  export type EventListParams = EventsAPI.EventListParams;
}
