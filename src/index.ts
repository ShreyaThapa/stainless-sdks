// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources/index';

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

export const {
  DwollaError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Dwolla {
  export type RequestOptions = Core.RequestOptions;

  export import OffsetStringPagination = Pagination.OffsetStringPagination;
  export type OffsetStringPaginationParams = Pagination.OffsetStringPaginationParams;
  export type OffsetStringPaginationResponse<T> = Pagination.OffsetStringPaginationResponse<T>;

  export import OffsetIntegerPagination = Pagination.OffsetIntegerPagination;
  export type OffsetIntegerPaginationParams = Pagination.OffsetIntegerPaginationParams;
  export type OffsetIntegerPaginationResponse<T> = Pagination.OffsetIntegerPaginationResponse<T>;

  export import Tokens = API.Tokens;
  export type TokenGenerateResponse = API.TokenGenerateResponse;
  export type TokenGenerateParams = API.TokenGenerateParams;

  export import Root = API.Root;
  export type RootListResponse = API.RootListResponse;

  export import Accounts = API.Accounts;
  export type AccountRetrieveResponse = API.AccountRetrieveResponse;

  export import FundingSources = API.FundingSources;
  export type FundingSourceRetrieveResponse = API.FundingSourceRetrieveResponse;
  export type FundingSourceUpdateResponse = API.FundingSourceUpdateResponse;
  export type FundingSourceCreateParams = API.FundingSourceCreateParams;
  export type FundingSourceUpdateParams = API.FundingSourceUpdateParams;

  export import Customers = API.Customers;
  export type Controller = API.Controller;
  export type UnverifiedBusinessCustomer = API.UnverifiedBusinessCustomer;
  export type UnverifiedCustomer = API.UnverifiedCustomer;
  export type VerifiedBusinessCustomer = API.VerifiedBusinessCustomer;
  export type VerifiedPersonalCustomer = API.VerifiedPersonalCustomer;
  export type VerifiedSolePropCustomer = API.VerifiedSolePropCustomer;
  export type CustomerRetrieveResponse = API.CustomerRetrieveResponse;
  export type CustomerUpdateResponse = API.CustomerUpdateResponse;
  export type CustomerListResponse = API.CustomerListResponse;
  export import CustomerListResponsesOffsetStringPagination = API.CustomerListResponsesOffsetStringPagination;
  export type CustomerCreateParams = API.CustomerCreateParams;
  export type CustomerUpdateParams = API.CustomerUpdateParams;
  export type CustomerListParams = API.CustomerListParams;

  export import BusinessClassifications = API.BusinessClassifications;
  export type BusinessClassificationRetrieveResponse = API.BusinessClassificationRetrieveResponse;
  export type BusinessClassificationListResponse = API.BusinessClassificationListResponse;

  export import BeneficialOwners = API.BeneficialOwners;
  export type BeneficialOwnerRetrieveResponse = API.BeneficialOwnerRetrieveResponse;
  export type BeneficialOwnerUpdateResponse = API.BeneficialOwnerUpdateResponse;
  export type BeneficialOwnerDeleteResponse = API.BeneficialOwnerDeleteResponse;
  export type BeneficialOwnerUpdateParams = API.BeneficialOwnerUpdateParams;

  export import Documents = API.Documents;
  export type DocumentRetrieveResponse = API.DocumentRetrieveResponse;

  export import Kba = API.Kba;
  export type KbaRetrieveQuestionsResponse = API.KbaRetrieveQuestionsResponse;
  export type KbaVerifyResponse = API.KbaVerifyResponse;
  export type KbaVerifyParams = API.KbaVerifyParams;

  export import Transfers = API.Transfers;
  export type TransferRetrieveResponse = API.TransferRetrieveResponse;
  export type TransferCancelResponse = API.TransferCancelResponse;
  export type TransferCancelParams = API.TransferCancelParams;
  export type TransferInitiateParams = API.TransferInitiateParams;

  export import OnDemandAuthorizations = API.OnDemandAuthorizations;
  export type OnDemandAuthorizationCreateResponse = API.OnDemandAuthorizationCreateResponse;

  export import MassPayments = API.MassPayments;
  export type MassPaymentRetrieveResponse = API.MassPaymentRetrieveResponse;
  export type MassPaymentUpdateResponse = API.MassPaymentUpdateResponse;
  export type MassPaymentCreateParams = API.MassPaymentCreateParams;
  export type MassPaymentUpdateParams = API.MassPaymentUpdateParams;

  export import Labels = API.Labels;
  export type LabelRetrieveResponse = API.LabelRetrieveResponse;
  export type LabelRemoveResponse = API.LabelRemoveResponse;

  export import LedgerEntries = API.LedgerEntries;
  export type LedgerEntryRetrieveResponse = API.LedgerEntryRetrieveResponse;

  export import LabelReallocations = API.LabelReallocations;
  export type LabelReallocationRetrieveResponse = API.LabelReallocationRetrieveResponse;
  export type LabelReallocationCreateParams = API.LabelReallocationCreateParams;

  export import Events = API.Events;
  export type EventRetrieveResponse = API.EventRetrieveResponse;
  export type EventListResponse = API.EventListResponse;
  export import EventListResponsesOffsetIntegerPagination = API.EventListResponsesOffsetIntegerPagination;
  export type EventListParams = API.EventListParams;

  export import WebhookSubscriptions = API.WebhookSubscriptions;
  export type WebhookSubscriptionRetrieveResponse = API.WebhookSubscriptionRetrieveResponse;
  export type WebhookSubscriptionUpdateResponse = API.WebhookSubscriptionUpdateResponse;
  export type WebhookSubscriptionListResponse = API.WebhookSubscriptionListResponse;
  export type WebhookSubscriptionDeleteResponse = API.WebhookSubscriptionDeleteResponse;
  export type WebhookSubscriptionCreateParams = API.WebhookSubscriptionCreateParams;
  export type WebhookSubscriptionUpdateParams = API.WebhookSubscriptionUpdateParams;

  export import Webhooks = API.Webhooks;
  export type WebhookRetrieveResponse = API.WebhookRetrieveResponse;

  export import ExchangePartners = API.ExchangePartners;
  export type ExchangePartnerRetrieveResponse = API.ExchangePartnerRetrieveResponse;

  export import Exchanges = API.Exchanges;
  export type ExchangeCreateResponse = API.ExchangeCreateResponse;
  export type ExchangeRetrieveResponse = API.ExchangeRetrieveResponse;
  export type ExchangeListResponse = API.ExchangeListResponse;
  export type ExchangeCreateParams = API.ExchangeCreateParams;

  export type ExchangePartners = API.ExchangePartners;
  export type HalLink = API.HalLink;
  export type InternationalAddress = API.InternationalAddress;
  export type Passport = API.Passport;
  export type TransferAmount = API.TransferAmount;
}

export default Dwolla;
