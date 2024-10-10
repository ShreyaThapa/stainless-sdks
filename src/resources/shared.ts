// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';

export interface ExchangePartners {
  _embedded?: ExchangePartners._Embedded;

  _links?: unknown;

  total?: number;
}

export namespace ExchangePartners {
  export interface _Embedded {
    'exchange-partners'?: Array<Shared.ExchangePartners>;
  }
}

export interface HalLink {
  href?: string;

  'resource-type'?: string;

  type?: string;
}

export interface InternationalAddress {
  address1: string;

  city: string;

  country: string;

  stateProvinceRegion: string;

  address2?: string;

  address3?: string;

  postalCode?: string;
}

export interface Passport {
  country: string;

  number: string;
}

export interface TransferAmount {
  currency: string;

  value: string;
}
