// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TransfersAPI from './transfers';
import * as Shared from '../shared';
import * as FailureAPI from './failure';
import * as FeesAPI from './fees';

export class Transfers extends APIResource {
  fees: FeesAPI.Fees = new FeesAPI.Fees(this._client);
  failure: FailureAPI.Failure = new FailureAPI.Failure(this._client);

  /**
   * Retrieve a transfer
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<TransferRetrieveResponse> {
    return this._client.get(`/transfers/${id}`, options);
  }

  /**
   * Cancel a transfer
   */
  cancel(id: string, body: TransferCancelParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post(`/transfers/${id}`, { body, ...options });
  }

  /**
   * Initiate a transfer
   */
  initiate(body: TransferInitiateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/transfers', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface TransferRetrieveResponse {
  id?: string;

  _links?: Record<string, Shared.HalLink>;

  achDetails?: TransferRetrieveResponse.ACHDetails;

  amount?: TransferRetrieveResponse.Amount;

  clearing?: TransferRetrieveResponse.Clearing;

  correlationId?: string;

  created?: string;

  metadata?: TransferRetrieveResponse.Metadata;

  processingChannel?: TransferRetrieveResponse.ProcessingChannel;

  rtpDetails?: TransferRetrieveResponse.RtpDetails;

  status?: string;
}

export namespace TransferRetrieveResponse {
  export interface ACHDetails {
    destination?: ACHDetails.Destination;

    source?: ACHDetails.Source;
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

    export interface Source {
      addenda?: Source.Addenda;
    }

    export namespace Source {
      export interface Addenda {
        values?: Array<string>;
      }
    }
  }

  export interface Amount {
    currency?: string;

    value?: string;
  }

  export interface Clearing {
    destination?: string;

    source?: string;
  }

  export interface Metadata {
    note?: string;

    paymentId?: string;
  }

  export interface ProcessingChannel {
    destination?: string;
  }

  export interface RtpDetails {
    destination?: RtpDetails.Destination;
  }

  export namespace RtpDetails {
    export interface Destination {
      remittanceData?: string;
    }
  }
}

export type TransferCancelResponse = unknown;

export interface TransferCancelParams {
  status: string;
}

export interface TransferInitiateParams {
  _links: TransferInitiateParams._Links;

  amount: Shared.TransferAmount;

  achDetails?: TransferInitiateParams.ACHDetails;

  clearing?: TransferInitiateParams.Clearing;

  correlationId?: string;

  fees?: Array<TransferInitiateParams.Fee>;

  metadata?: unknown;

  processingChannel?: TransferInitiateParams.ProcessingChannel;

  rtpDetails?: TransferInitiateParams.RtpDetails;
}

export namespace TransferInitiateParams {
  export interface _Links {
    destination?: _Links.Destination;

    source?: _Links.Source;
  }

  export namespace _Links {
    export interface Destination {
      href?: string;
    }

    export interface Source {
      href?: string;
    }
  }

  export interface ACHDetails {
    destination?: ACHDetails.Destination;

    source?: ACHDetails.Source;
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
    destination?: string;

    source?: string;
  }

  export interface Fee {
    _links?: Fee._Links;

    amount?: Fee.Amount;
  }

  export namespace Fee {
    export interface _Links {
      'charge-to'?: _Links.ChargeTo;
    }

    export namespace _Links {
      export interface ChargeTo {
        href?: string;
      }
    }

    export interface Amount {
      amount?: string;

      currency?: string;
    }
  }

  export interface ProcessingChannel {
    destination?: string;
  }

  export interface RtpDetails {
    destination?: RtpDetails.Destination;
  }

  export namespace RtpDetails {
    export interface Destination {
      remittanceData?: string;
    }
  }
}

export namespace Transfers {
  export type TransferRetrieveResponse = TransfersAPI.TransferRetrieveResponse;
  export type TransferCancelResponse = TransfersAPI.TransferCancelResponse;
  export type TransferCancelParams = TransfersAPI.TransferCancelParams;
  export type TransferInitiateParams = TransfersAPI.TransferInitiateParams;
  export import Fees = FeesAPI.Fees;
  export type FeeListResponse = FeesAPI.FeeListResponse;
  export import Failure = FailureAPI.Failure;
  export type FailureRetrieveResponse = FailureAPI.FailureRetrieveResponse;
}
