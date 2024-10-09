// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as EventsAPI from './events';

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
  ): Core.APIPromise<EventListResponse> {
    return this._client.get('/events', options);
  }
}

export interface EventRetrieveResponse {
  id?: string;

  _links?: Record<string, EventRetrieveResponse._Links>;

  created?: string;

  resourceId?: string;

  topic?: string;
}

export namespace EventRetrieveResponse {
  export interface _Links {
    href?: string;

    'resource-type'?: string;

    type?: string;
  }
}

export interface EventListResponse {
  _embedded?: EventListResponse._Embedded;

  _links?: unknown;

  additionalProperties?: EventListResponse.AdditionalProperties;

  total?: number;
}

export namespace EventListResponse {
  export interface _Embedded {
    events?: Array<_Embedded.Event>;
  }

  export namespace _Embedded {
    export interface Event {
      id?: string;

      _links?: Record<string, Event._Links>;

      created?: string;

      resourceId?: string;

      topic?: string;
    }

    export namespace Event {
      export interface _Links {
        href?: string;

        'resource-type'?: string;

        type?: string;
      }
    }
  }

  export interface AdditionalProperties {
    href?: string;

    'resource-type'?: string;

    type?: string;
  }
}

export interface EventListParams {}

export namespace Events {
  export import EventRetrieveResponse = EventsAPI.EventRetrieveResponse;
  export import EventListResponse = EventsAPI.EventListResponse;
  export import EventListParams = EventsAPI.EventListParams;
}
