// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as WebhooksAPI from './webhooks';
import { WebhookListParams, WebhookListResponse, Webhooks as WebhooksAPIWebhooks } from './webhooks';

export class WebhookSubscriptions extends APIResource {
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);

  /**
   * Create a webhook subscription
   */
  create(body: WebhookSubscriptionCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/webhook-subscriptions', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieve a webhook subscription
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<WebhookSubscriptionRetrieveResponse> {
    return this._client.get(`/webhook-subscriptions/${id}`, options);
  }

  /**
   * Update a webhook subscription
   */
  update(
    id: string,
    body: WebhookSubscriptionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookSubscriptionUpdateResponse> {
    return this._client.post(`/webhook-subscriptions/${id}`, { body, ...options });
  }

  /**
   * List webhook subscriptions
   */
  list(options?: Core.RequestOptions): Core.APIPromise<WebhookSubscriptionListResponse> {
    return this._client.get('/webhook-subscriptions', options);
  }

  /**
   * Delete a webhook subscription
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<WebhookSubscriptionDeleteResponse> {
    return this._client.delete(`/webhook-subscriptions/${id}`, options);
  }
}

export interface WebhookSubscriptionRetrieveResponse {
  id?: string;

  _links?: WebhookSubscriptionRetrieveResponse._Links;

  created?: string;

  paused?: boolean;

  url?: string;
}

export namespace WebhookSubscriptionRetrieveResponse {
  export interface _Links {
    self?: _Links.Self;

    webhooks?: _Links.Webhooks;
  }

  export namespace _Links {
    export interface Self {
      href?: string;
    }

    export interface Webhooks {
      href?: string;
    }
  }
}

export interface WebhookSubscriptionUpdateResponse {
  id?: string;

  _links?: WebhookSubscriptionUpdateResponse._Links;

  created?: string;

  paused?: boolean;

  url?: string;
}

export namespace WebhookSubscriptionUpdateResponse {
  export interface _Links {
    self?: _Links.Self;

    webhooks?: _Links.Webhooks;
  }

  export namespace _Links {
    export interface Self {
      href?: string;
    }

    export interface Webhooks {
      href?: string;
    }
  }
}

export interface WebhookSubscriptionListResponse {
  _embedded?: WebhookSubscriptionListResponse._Embedded;

  _links?: WebhookSubscriptionListResponse._Links;

  total?: number;
}

export namespace WebhookSubscriptionListResponse {
  export interface _Embedded {
    'webhook-subscriptions'?: Array<_Embedded.WebhookSubscription>;
  }

  export namespace _Embedded {
    export interface WebhookSubscription {
      id?: string;

      _links?: WebhookSubscription._Links;

      created?: string;

      paused?: boolean;

      url?: string;
    }

    export namespace WebhookSubscription {
      export interface _Links {
        self?: _Links.Self;

        webhooks?: _Links.Webhooks;
      }

      export namespace _Links {
        export interface Self {
          href?: string;
        }

        export interface Webhooks {
          href?: string;
        }
      }
    }
  }

  export interface _Links {
    self?: _Links.Self;
  }

  export namespace _Links {
    export interface Self {
      href?: string;
    }
  }
}

export interface WebhookSubscriptionDeleteResponse {
  id?: string;

  _links?: WebhookSubscriptionDeleteResponse._Links;

  created?: string;

  paused?: boolean;

  url?: string;
}

export namespace WebhookSubscriptionDeleteResponse {
  export interface _Links {
    self?: _Links.Self;

    webhooks?: _Links.Webhooks;
  }

  export namespace _Links {
    export interface Self {
      href?: string;
    }

    export interface Webhooks {
      href?: string;
    }
  }
}

export interface WebhookSubscriptionCreateParams {
  secret: string;

  url: string;
}

export interface WebhookSubscriptionUpdateParams {
  paused: boolean;
}

WebhookSubscriptions.Webhooks = WebhooksAPIWebhooks;

export declare namespace WebhookSubscriptions {
  export {
    type WebhookSubscriptionRetrieveResponse as WebhookSubscriptionRetrieveResponse,
    type WebhookSubscriptionUpdateResponse as WebhookSubscriptionUpdateResponse,
    type WebhookSubscriptionListResponse as WebhookSubscriptionListResponse,
    type WebhookSubscriptionDeleteResponse as WebhookSubscriptionDeleteResponse,
    type WebhookSubscriptionCreateParams as WebhookSubscriptionCreateParams,
    type WebhookSubscriptionUpdateParams as WebhookSubscriptionUpdateParams,
  };

  export {
    WebhooksAPIWebhooks as Webhooks,
    type WebhookListResponse as WebhookListResponse,
    type WebhookListParams as WebhookListParams,
  };
}
