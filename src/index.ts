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
  export import RequestOptions = Core.RequestOptions;

  export import OffsetStringPagination = Pagination.OffsetStringPagination;
  export import OffsetStringPaginationParams = Pagination.OffsetStringPaginationParams;
  export import OffsetStringPaginationResponse = Pagination.OffsetStringPaginationResponse;

  export import OffsetIntegerPagination = Pagination.OffsetIntegerPagination;
  export import OffsetIntegerPaginationParams = Pagination.OffsetIntegerPaginationParams;
  export import OffsetIntegerPaginationResponse = Pagination.OffsetIntegerPaginationResponse;

  export import Tokens = API.Tokens;
  export import TokenGenerateResponse = API.TokenGenerateResponse;
  export import TokenGenerateParams = API.TokenGenerateParams;

  export import Root = API.Root;
  export import RootListResponse = API.RootListResponse;

  export import Accounts = API.Accounts;
  export import AccountRetrieveResponse = API.AccountRetrieveResponse;

  export import FundingSources = API.FundingSources;
  export import FundingSourceRetrieveResponse = API.FundingSourceRetrieveResponse;
  export import FundingSourceUpdateResponse = API.FundingSourceUpdateResponse;
  export import FundingSourceCreateParams = API.FundingSourceCreateParams;
  export import FundingSourceUpdateParams = API.FundingSourceUpdateParams;

  export import Customers = API.Customers;
  export import Controller = API.Controller;
  export import UnverifiedBusinessCustomer = API.UnverifiedBusinessCustomer;
  export import UnverifiedCustomer = API.UnverifiedCustomer;
  export import VerifiedBusinessCustomer = API.VerifiedBusinessCustomer;
  export import VerifiedPersonalCustomer = API.VerifiedPersonalCustomer;
  export import VerifiedSolePropCustomer = API.VerifiedSolePropCustomer;
  export import CustomerRetrieveResponse = API.CustomerRetrieveResponse;
  export import CustomerUpdateResponse = API.CustomerUpdateResponse;
  export import CustomerListResponse = API.CustomerListResponse;
  export import CustomerListResponsesOffsetStringPagination = API.CustomerListResponsesOffsetStringPagination;
  export import CustomerCreateParams = API.CustomerCreateParams;
  export import CustomerUpdateParams = API.CustomerUpdateParams;
  export import CustomerListParams = API.CustomerListParams;

  export import BusinessClassifications = API.BusinessClassifications;
  export import BusinessClassificationRetrieveResponse = API.BusinessClassificationRetrieveResponse;
  export import BusinessClassificationListResponse = API.BusinessClassificationListResponse;

  export import BeneficialOwners = API.BeneficialOwners;
  export import BeneficialOwnerRetrieveResponse = API.BeneficialOwnerRetrieveResponse;
  export import BeneficialOwnerUpdateResponse = API.BeneficialOwnerUpdateResponse;
  export import BeneficialOwnerDeleteResponse = API.BeneficialOwnerDeleteResponse;
  export import BeneficialOwnerUpdateParams = API.BeneficialOwnerUpdateParams;

  export import Documents = API.Documents;
  export import DocumentRetrieveResponse = API.DocumentRetrieveResponse;

  export import Kba = API.Kba;
  export import KbaRetrieveQuestionsResponse = API.KbaRetrieveQuestionsResponse;
  export import KbaVerifyResponse = API.KbaVerifyResponse;
  export import KbaVerifyParams = API.KbaVerifyParams;

  export import Transfers = API.Transfers;
  export import TransferRetrieveResponse = API.TransferRetrieveResponse;
  export import TransferCancelResponse = API.TransferCancelResponse;
  export import TransferCancelParams = API.TransferCancelParams;
  export import TransferInitiateParams = API.TransferInitiateParams;

  export import OnDemandAuthorizations = API.OnDemandAuthorizations;
  export import OnDemandAuthorizationCreateResponse = API.OnDemandAuthorizationCreateResponse;

  export import MassPayments = API.MassPayments;
  export import MassPaymentRetrieveResponse = API.MassPaymentRetrieveResponse;
  export import MassPaymentUpdateResponse = API.MassPaymentUpdateResponse;
  export import MassPaymentCreateParams = API.MassPaymentCreateParams;
  export import MassPaymentUpdateParams = API.MassPaymentUpdateParams;

  export import Labels = API.Labels;
  export import LabelRetrieveResponse = API.LabelRetrieveResponse;
  export import LabelRemoveResponse = API.LabelRemoveResponse;

  export import LedgerEntries = API.LedgerEntries;
  export import LedgerEntryRetrieveResponse = API.LedgerEntryRetrieveResponse;

  export import LabelReallocations = API.LabelReallocations;
  export import LabelReallocationRetrieveResponse = API.LabelReallocationRetrieveResponse;
  export import LabelReallocationCreateParams = API.LabelReallocationCreateParams;

  export import Events = API.Events;
  export import EventRetrieveResponse = API.EventRetrieveResponse;
  export import EventListResponse = API.EventListResponse;
  export import EventListResponsesOffsetIntegerPagination = API.EventListResponsesOffsetIntegerPagination;
  export import EventListParams = API.EventListParams;

  export import WebhookSubscriptions = API.WebhookSubscriptions;
  export import WebhookSubscriptionRetrieveResponse = API.WebhookSubscriptionRetrieveResponse;
  export import WebhookSubscriptionUpdateResponse = API.WebhookSubscriptionUpdateResponse;
  export import WebhookSubscriptionListResponse = API.WebhookSubscriptionListResponse;
  export import WebhookSubscriptionDeleteResponse = API.WebhookSubscriptionDeleteResponse;
  export import WebhookSubscriptionCreateParams = API.WebhookSubscriptionCreateParams;
  export import WebhookSubscriptionUpdateParams = API.WebhookSubscriptionUpdateParams;

  export import Webhooks = API.Webhooks;
  export import WebhookRetrieveResponse = API.WebhookRetrieveResponse;

  export import ExchangePartners = API.ExchangePartners;
  export import ExchangePartnerRetrieveResponse = API.ExchangePartnerRetrieveResponse;

  export import Exchanges = API.Exchanges;
  export import ExchangeCreateResponse = API.ExchangeCreateResponse;
  export import ExchangeRetrieveResponse = API.ExchangeRetrieveResponse;
  export import ExchangeListResponse = API.ExchangeListResponse;
  export import ExchangeCreateParams = API.ExchangeCreateParams;

  export import ExchangePartners = API.ExchangePartners;
  export import HalLink = API.HalLink;
  export import InternationalAddress = API.InternationalAddress;
  export import Passport = API.Passport;
  export import TransferAmount = API.TransferAmount;
}

export default Dwolla;
