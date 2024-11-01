// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import {
  type OffsetIntegerPaginationParams,
  OffsetIntegerPaginationResponse,
  type OffsetStringPaginationParams,
  OffsetStringPaginationResponse,
} from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  BusinessClassificationListResponse,
  BusinessClassificationRetrieveResponse,
  BusinessClassifications,
} from './resources/business-classifications';
import { DocumentRetrieveResponse, Documents } from './resources/documents';
import {
  EventListParams,
  EventListResponse,
  EventListResponsesOffsetIntegerPagination,
  EventRetrieveResponse,
  Events,
} from './resources/events';
import { ExchangePartnerRetrieveResponse, ExchangePartners } from './resources/exchange-partners';
import {
  ExchangeCreateParams,
  ExchangeCreateResponse,
  ExchangeListResponse,
  ExchangeRetrieveResponse,
  Exchanges,
} from './resources/exchanges';
import { Kba, KbaRetrieveQuestionsResponse, KbaVerifyParams, KbaVerifyResponse } from './resources/kba';
import {
  LabelReallocationCreateParams,
  LabelReallocationRetrieveResponse,
  LabelReallocations,
} from './resources/label-reallocations';
import { LedgerEntries, LedgerEntryRetrieveResponse } from './resources/ledger-entries';
import {
  OnDemandAuthorizationCreateResponse,
  OnDemandAuthorizations,
} from './resources/on-demand-authorizations';
import { Root, RootListResponse } from './resources/root';
import { TokenGenerateParams, TokenGenerateResponse, Tokens } from './resources/tokens';
import { AccountRetrieveResponse, Accounts } from './resources/accounts/accounts';
import {
  BeneficialOwnerDeleteResponse,
  BeneficialOwnerRetrieveResponse,
  BeneficialOwnerUpdateParams,
  BeneficialOwnerUpdateResponse,
  BeneficialOwners,
} from './resources/beneficial-owners/beneficial-owners';
import {
  Controller,
  CustomerCreateParams,
  CustomerListParams,
  CustomerListResponse,
  CustomerListResponsesOffsetStringPagination,
  CustomerRetrieveResponse,
  CustomerUpdateParams,
  CustomerUpdateResponse,
  Customers,
  UnverifiedBusinessCustomer,
  UnverifiedCustomer,
  VerifiedBusinessCustomer,
  VerifiedPersonalCustomer,
  VerifiedSolePropCustomer,
} from './resources/customers/customers';
import {
  FundingSourceCreateParams,
  FundingSourceRetrieveResponse,
  FundingSourceUpdateParams,
  FundingSourceUpdateResponse,
  FundingSources,
} from './resources/funding-sources/funding-sources';
import { LabelRemoveResponse, LabelRetrieveResponse, Labels } from './resources/labels/labels';
import {
  MassPaymentCreateParams,
  MassPaymentRetrieveResponse,
  MassPaymentUpdateParams,
  MassPaymentUpdateResponse,
  MassPayments,
} from './resources/mass-payments/mass-payments';
import {
  TransferCancelParams,
  TransferCancelResponse,
  TransferInitiateParams,
  TransferRetrieveResponse,
  Transfers,
} from './resources/transfers/transfers';
import {
  WebhookSubscriptionCreateParams,
  WebhookSubscriptionDeleteResponse,
  WebhookSubscriptionListResponse,
  WebhookSubscriptionRetrieveResponse,
  WebhookSubscriptionUpdateParams,
  WebhookSubscriptionUpdateResponse,
  WebhookSubscriptions,
} from './resources/webhook-subscriptions/webhook-subscriptions';
import { WebhookRetrieveResponse, Webhooks } from './resources/webhooks/webhooks';

const environments = {
  production: 'https://api.dwolla.com',
  sandbox: 'https://api-sandbox.dwolla.com',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Token for Bearer Authentication
   */
  bearerToken?: string | undefined;

  /**
   * Username for Basic Authentication
   */
  username?: string | undefined;

  /**
   * Password for Basic Authentication
   */
  password?: string | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://api.dwolla.com`
   * - `sandbox` corresponds to `https://api-sandbox.dwolla.com`
   */
  environment?: Environment;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['DWOLLA_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Dwolla API.
 */
export class Dwolla extends Core.APIClient {
  bearerToken: string;
  username: string;
  password: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Dwolla API.
   *
   * @param {string | undefined} [opts.bearerToken=process.env['BEARER_TOKEN'] ?? undefined]
   * @param {string | undefined} [opts.username=process.env['BASIC_AUTH_USERNAME'] ?? undefined]
   * @param {string | undefined} [opts.password=process.env['BASIC_AUTH_PASSWORD'] ?? undefined]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['DWOLLA_BASE_URL'] ?? https://api.dwolla.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('DWOLLA_BASE_URL'),
    bearerToken = Core.readEnv('BEARER_TOKEN'),
    username = Core.readEnv('BASIC_AUTH_USERNAME'),
    password = Core.readEnv('BASIC_AUTH_PASSWORD'),
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.DwollaError(
        "The BEARER_TOKEN environment variable is missing or empty; either provide it, or instantiate the Dwolla client with an bearerToken option, like new Dwolla({ bearerToken: 'My Bearer Token' }).",
      );
    }
    if (username === undefined) {
      throw new Errors.DwollaError(
        "The BASIC_AUTH_USERNAME environment variable is missing or empty; either provide it, or instantiate the Dwolla client with an username option, like new Dwolla({ username: 'My Username' }).",
      );
    }
    if (password === undefined) {
      throw new Errors.DwollaError(
        "The BASIC_AUTH_PASSWORD environment variable is missing or empty; either provide it, or instantiate the Dwolla client with an password option, like new Dwolla({ password: 'My Password' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      username,
      password,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.DwollaError(
        'Ambiguous URL; The `baseURL` option (or DWOLLA_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.bearerToken = bearerToken;
    this.username = username;
    this.password = password;
  }

  tokens: API.Tokens = new API.Tokens(this);
  root: API.Root = new API.Root(this);
  accounts: API.Accounts = new API.Accounts(this);
  fundingSources: API.FundingSources = new API.FundingSources(this);
  customers: API.Customers = new API.Customers(this);
  businessClassifications: API.BusinessClassifications = new API.BusinessClassifications(this);
  beneficialOwners: API.BeneficialOwners = new API.BeneficialOwners(this);
  documents: API.Documents = new API.Documents(this);
  kba: API.Kba = new API.Kba(this);
  transfers: API.Transfers = new API.Transfers(this);
  onDemandAuthorizations: API.OnDemandAuthorizations = new API.OnDemandAuthorizations(this);
  massPayments: API.MassPayments = new API.MassPayments(this);
  labels: API.Labels = new API.Labels(this);
  ledgerEntries: API.LedgerEntries = new API.LedgerEntries(this);
  labelReallocations: API.LabelReallocations = new API.LabelReallocations(this);
  events: API.Events = new API.Events(this);
  webhookSubscriptions: API.WebhookSubscriptions = new API.WebhookSubscriptions(this);
  webhooks: API.Webhooks = new API.Webhooks(this);
  exchangePartners: API.ExchangePartners = new API.ExchangePartners(this);
  exchanges: API.Exchanges = new API.Exchanges(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    const basicAuth = this.basicAuth(opts);
    const bearerAuth = this.bearerAuth(opts);

    if (bearerAuth != null && !Core.isEmptyObj(bearerAuth)) {
      return bearerAuth;
    }
    return {};
  }

  protected basicAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (!this.username) {
      return {};
    }

    if (!this.password) {
      return {};
    }

    const credentials = `${this.username}:${this.password}`;
    const Authorization = `Basic ${Core.toBase64(credentials)}`;
    return { Authorization };
  }

  protected bearerAuth(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.bearerToken}` };
  }

  static Dwolla = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static DwollaError = Errors.DwollaError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const DwollaError = Errors.DwollaError;
export const APIError = Errors.APIError;
export const APIConnectionError = Errors.APIConnectionError;
export const APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
export const APIUserAbortError = Errors.APIUserAbortError;
export const NotFoundError = Errors.NotFoundError;
export const ConflictError = Errors.ConflictError;
export const RateLimitError = Errors.RateLimitError;
export const BadRequestError = Errors.BadRequestError;
export const AuthenticationError = Errors.AuthenticationError;
export const InternalServerError = Errors.InternalServerError;
export const PermissionDeniedError = Errors.PermissionDeniedError;
export const UnprocessableEntityError = Errors.UnprocessableEntityError;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

Dwolla.Tokens = Tokens;
Dwolla.Root = Root;
Dwolla.Accounts = Accounts;
Dwolla.FundingSources = FundingSources;
Dwolla.Customers = Customers;
Dwolla.CustomerListResponsesOffsetStringPagination = CustomerListResponsesOffsetStringPagination;
Dwolla.BusinessClassifications = BusinessClassifications;
Dwolla.BeneficialOwners = BeneficialOwners;
Dwolla.Documents = Documents;
Dwolla.Kba = Kba;
Dwolla.Transfers = Transfers;
Dwolla.OnDemandAuthorizations = OnDemandAuthorizations;
Dwolla.MassPayments = MassPayments;
Dwolla.Labels = Labels;
Dwolla.LedgerEntries = LedgerEntries;
Dwolla.LabelReallocations = LabelReallocations;
Dwolla.Events = Events;
Dwolla.EventListResponsesOffsetIntegerPagination = EventListResponsesOffsetIntegerPagination;
Dwolla.WebhookSubscriptions = WebhookSubscriptions;
Dwolla.Webhooks = Webhooks;
Dwolla.ExchangePartners = ExchangePartners;
Dwolla.Exchanges = Exchanges;

export declare namespace Dwolla {
  export type RequestOptions = Core.RequestOptions;

  export import OffsetStringPagination = Pagination.OffsetStringPagination;
  export {
    type OffsetStringPaginationParams as OffsetStringPaginationParams,
    type OffsetStringPaginationResponse as OffsetStringPaginationResponse,
  };

  export import OffsetIntegerPagination = Pagination.OffsetIntegerPagination;
  export {
    type OffsetIntegerPaginationParams as OffsetIntegerPaginationParams,
    type OffsetIntegerPaginationResponse as OffsetIntegerPaginationResponse,
  };

  export {
    Tokens as Tokens,
    type TokenGenerateResponse as TokenGenerateResponse,
    type TokenGenerateParams as TokenGenerateParams,
  };

  export { Root as Root, type RootListResponse as RootListResponse };

  export { Accounts as Accounts, type AccountRetrieveResponse as AccountRetrieveResponse };

  export {
    FundingSources as FundingSources,
    type FundingSourceRetrieveResponse as FundingSourceRetrieveResponse,
    type FundingSourceUpdateResponse as FundingSourceUpdateResponse,
    type FundingSourceCreateParams as FundingSourceCreateParams,
    type FundingSourceUpdateParams as FundingSourceUpdateParams,
  };

  export {
    Customers as Customers,
    type Controller as Controller,
    type UnverifiedBusinessCustomer as UnverifiedBusinessCustomer,
    type UnverifiedCustomer as UnverifiedCustomer,
    type VerifiedBusinessCustomer as VerifiedBusinessCustomer,
    type VerifiedPersonalCustomer as VerifiedPersonalCustomer,
    type VerifiedSolePropCustomer as VerifiedSolePropCustomer,
    type CustomerRetrieveResponse as CustomerRetrieveResponse,
    type CustomerUpdateResponse as CustomerUpdateResponse,
    type CustomerListResponse as CustomerListResponse,
    CustomerListResponsesOffsetStringPagination as CustomerListResponsesOffsetStringPagination,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };

  export {
    BusinessClassifications as BusinessClassifications,
    type BusinessClassificationRetrieveResponse as BusinessClassificationRetrieveResponse,
    type BusinessClassificationListResponse as BusinessClassificationListResponse,
  };

  export {
    BeneficialOwners as BeneficialOwners,
    type BeneficialOwnerRetrieveResponse as BeneficialOwnerRetrieveResponse,
    type BeneficialOwnerUpdateResponse as BeneficialOwnerUpdateResponse,
    type BeneficialOwnerDeleteResponse as BeneficialOwnerDeleteResponse,
    type BeneficialOwnerUpdateParams as BeneficialOwnerUpdateParams,
  };

  export { Documents as Documents, type DocumentRetrieveResponse as DocumentRetrieveResponse };

  export {
    Kba as Kba,
    type KbaRetrieveQuestionsResponse as KbaRetrieveQuestionsResponse,
    type KbaVerifyResponse as KbaVerifyResponse,
    type KbaVerifyParams as KbaVerifyParams,
  };

  export {
    Transfers as Transfers,
    type TransferRetrieveResponse as TransferRetrieveResponse,
    type TransferCancelResponse as TransferCancelResponse,
    type TransferCancelParams as TransferCancelParams,
    type TransferInitiateParams as TransferInitiateParams,
  };

  export {
    OnDemandAuthorizations as OnDemandAuthorizations,
    type OnDemandAuthorizationCreateResponse as OnDemandAuthorizationCreateResponse,
  };

  export {
    MassPayments as MassPayments,
    type MassPaymentRetrieveResponse as MassPaymentRetrieveResponse,
    type MassPaymentUpdateResponse as MassPaymentUpdateResponse,
    type MassPaymentCreateParams as MassPaymentCreateParams,
    type MassPaymentUpdateParams as MassPaymentUpdateParams,
  };

  export {
    Labels as Labels,
    type LabelRetrieveResponse as LabelRetrieveResponse,
    type LabelRemoveResponse as LabelRemoveResponse,
  };

  export { LedgerEntries as LedgerEntries, type LedgerEntryRetrieveResponse as LedgerEntryRetrieveResponse };

  export {
    LabelReallocations as LabelReallocations,
    type LabelReallocationRetrieveResponse as LabelReallocationRetrieveResponse,
    type LabelReallocationCreateParams as LabelReallocationCreateParams,
  };

  export {
    Events as Events,
    type EventRetrieveResponse as EventRetrieveResponse,
    type EventListResponse as EventListResponse,
    EventListResponsesOffsetIntegerPagination as EventListResponsesOffsetIntegerPagination,
    type EventListParams as EventListParams,
  };

  export {
    WebhookSubscriptions as WebhookSubscriptions,
    type WebhookSubscriptionRetrieveResponse as WebhookSubscriptionRetrieveResponse,
    type WebhookSubscriptionUpdateResponse as WebhookSubscriptionUpdateResponse,
    type WebhookSubscriptionListResponse as WebhookSubscriptionListResponse,
    type WebhookSubscriptionDeleteResponse as WebhookSubscriptionDeleteResponse,
    type WebhookSubscriptionCreateParams as WebhookSubscriptionCreateParams,
    type WebhookSubscriptionUpdateParams as WebhookSubscriptionUpdateParams,
  };

  export { Webhooks as Webhooks, type WebhookRetrieveResponse as WebhookRetrieveResponse };

  export {
    ExchangePartners as ExchangePartners,
    type ExchangePartnerRetrieveResponse as ExchangePartnerRetrieveResponse,
  };

  export {
    Exchanges as Exchanges,
    type ExchangeCreateResponse as ExchangeCreateResponse,
    type ExchangeRetrieveResponse as ExchangeRetrieveResponse,
    type ExchangeListResponse as ExchangeListResponse,
    type ExchangeCreateParams as ExchangeCreateParams,
  };

  export type ExchangePartners = API.ExchangePartners;
  export type HalLink = API.HalLink;
  export type InternationalAddress = API.InternationalAddress;
  export type Passport = API.Passport;
  export type TransferAmount = API.TransferAmount;
}

export default Dwolla;
