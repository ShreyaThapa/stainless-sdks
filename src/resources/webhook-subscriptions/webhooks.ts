// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Webhooks extends APIResource {
  /**
   * List webhooks for a webhook subscription
   */
  list(
    id: string,
    query?: WebhookListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookListResponse>;
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<WebhookListResponse>;
  list(
    id: string,
    query: WebhookListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookListResponse> {
    if (isRequestOptions(query)) {
      return this.list(id, {}, query);
    }
    return this._client.get(`/webhook-subscriptions/${id}/webhooks`, { query, ...options });
  }
}

export interface WebhookListResponse {
  _embedded?: WebhookListResponse._Embedded;

  _links?: WebhookListResponse._Links;

  total?: number;
}

export namespace WebhookListResponse {
  export interface _Embedded {
    webhooks?: Array<_Embedded.Webhook>;
  }

  export namespace _Embedded {
    export interface Webhook {
      id?: string;

      _links?: Webhook._Links;

      accountId?: string;

      attempts?: Array<Webhook.Attempt>;

      eventId?: string;

      subscriptionId?: string;

      topic?: string;
    }

    export namespace Webhook {
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
  }

  export interface _Links {
    first?: _Links.First;

    last?: _Links.Last;

    next?: _Links.Next;

    self?: _Links.Self;
  }

  export namespace _Links {
    export interface First {
      href?: string;
    }

    export interface Last {
      href?: string;
    }

    export interface Next {
      href?: string;
    }

    export interface Self {
      href?: string;
    }
  }
}

export interface WebhookListParams {
  /**
   * Only include webhooks created before this date. ISO-8601 format `YYYY-MM-DD`
   */
  endDate?: string;

  /**
   * How many results to return
   */
  limit?: string;

  /**
   * How many results to skip
   */
  offset?: string;

  /**
   * Only include webhooks created after this date. ISO-8601 format `YYYY-MM-DD`
   */
  startDate?: string;
}

export declare namespace Webhooks {
  export { type WebhookListResponse as WebhookListResponse, type WebhookListParams as WebhookListParams };
}
