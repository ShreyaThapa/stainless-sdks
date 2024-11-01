// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as RetriesAPI from './retries';
import { Retries, RetryListResponse } from './retries';

export class Webhooks extends APIResource {
  retries: RetriesAPI.Retries = new RetriesAPI.Retries(this._client);

  /**
   * Retrieve a webhook
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<WebhookRetrieveResponse> {
    return this._client.get(`/webhooks/${id}`, options);
  }

  /**
   * Retry a webhook
   */
  retry(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/webhooks/${id}/retries`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface WebhookRetrieveResponse {
  id?: string;

  _links?: WebhookRetrieveResponse._Links;

  accountId?: string;

  attempts?: Array<WebhookRetrieveResponse.Attempt>;

  eventId?: string;

  subscriptionId?: string;

  topic?: string;
}

export namespace WebhookRetrieveResponse {
  export interface _Links {
    event?: _Links.Event;

    retry?: _Links.Retry;

    self?: _Links.Self;

    subscription?: _Links.Subscription;
  }

  export namespace _Links {
    export interface Event {
      href?: string;
    }

    export interface Retry {
      href?: string;
    }

    export interface Self {
      href?: string;
    }

    export interface Subscription {
      href?: string;
    }
  }

  export interface Attempt {
    id?: string;

    request?: Attempt.Request;

    response?: Attempt.Response;
  }

  export namespace Attempt {
    export interface Request {
      body?: string;

      headers?: Array<Request.Header>;

      timestamp?: string;

      url?: string;
    }

    export namespace Request {
      export interface Header {
        name?: string;

        value?: string;
      }
    }

    export interface Response {
      body?: string;

      headers?: Array<Response.Header>;

      statusCode?: number;

      timestamp?: string;
    }

    export namespace Response {
      export interface Header {
        name?: string;

        value?: string;
      }
    }
  }
}

Webhooks.Retries = Retries;

export declare namespace Webhooks {
  export { type WebhookRetrieveResponse as WebhookRetrieveResponse };

  export { Retries as Retries, type RetryListResponse as RetryListResponse };
}
