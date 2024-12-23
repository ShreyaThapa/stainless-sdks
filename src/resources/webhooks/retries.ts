// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Retries extends APIResource {
  /**
   * List retries for a webhook
   */
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<RetryListResponse> {
    return this._client.get(`/webhooks/${id}/retries`, options);
  }
}

export interface RetryListResponse {
  _embedded?: RetryListResponse._Embedded;

  _links?: RetryListResponse._Links;

  total?: number;
}

export namespace RetryListResponse {
  export interface _Embedded {
    retries?: Array<_Embedded.Retry>;
  }

  export namespace _Embedded {
    export interface Retry {
      id?: string;

      _links?: Retry._Links;

      timestamp?: string;
    }

    export namespace Retry {
      export interface _Links {
        self?: _Links.Self;

        webhook?: _Links.Webhook;
      }

      export namespace _Links {
        export interface Self {
          href?: string;
        }

        export interface Webhook {
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

export declare namespace Retries {
  export { type RetryListResponse as RetryListResponse };
}
